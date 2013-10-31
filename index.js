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

  translations.map(function(pair) {
    regex = new RegExp(pair[0], "g")
    data = data.replace(regex, pair[1])
  })

  return data
}