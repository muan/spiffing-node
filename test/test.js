var test = require("tape")
var spiffing = require("../")

test("has correct spelling", function(t) {
  t.true(convertSpellingCorrectly())
  t.end()
})

function convertSpellingCorrectly() {
  css = ".doge { colour: #000 }"
  return spiffing(css) == ".doge { color: #000 }"
}