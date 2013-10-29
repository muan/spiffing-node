var fs = require("fs")
var path = require("path")

module.exports = function (file) {
  fs.readFile( file, "utf8" , function (err, data) {
    if (err) throw err;
    writeFile(file, data);
  });

}

function writeFile (file, data) {
  filename = path.basename(file, '.css')
  new_filename = filename + "-converted.css"
  filepath = path.dirname(file)
  fs.writeFile( filepath + "/" + new_filename , correct_spelling(data), function (err) {
    if (err) throw err;
  });
}

function correct_spelling (data) {

  translations = [
    ["colour", "color"],
    ["grey", "gray"],
    ["!please", "!important"],
    ["transparency", "opacity"],
    ["centre", "center"],
    ["plump", "bold"],
    ["-photograph", "-image"],
    ["capitalise", "capitalize"]
  ]

  for ( i = 0; i < translations.length; i++) {
    regex = new RegExp(translations[i][0], "g")
    data = data.replace(regex, translations[i][1])
  }

  return data;
}