module.exports = correct_spelling

function correct_spelling(data) {

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

  return data
}