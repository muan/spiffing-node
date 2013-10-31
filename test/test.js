var test = require("tape")
var spiffing = require("../")
var child = require("child_process")

test("has correct spelling", function(t) {
  t.equal( spiffingDoge(), ".doge { color: #000 }" )
  t.end()
})

test("command line works", function(t) {
  child.exec("spiffing", function(error, stdout, stderr) {
    t.equal( stdout, "Converted target to target-converted.css!\n" )
    t.end()
  })
})

function spiffingDoge() {
  css = ".doge { colour: #000 }"
  return spiffing(css)
}