var test = require("tape")
var spiffing = require("../")

test("has correct spelling", function(t) {
  t.equal( spiffingDoge(), ".doge { color: #000 }" )
  t.end()
})

function spiffingDoge() {
  css = ".doge { colour: #000 }"
  return spiffing(css)
}