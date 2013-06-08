var fs = require("fs")
var path = require("path")

var test = require("../index")

test("test is a function", function* (assert) {
    assert.equal(typeof test, "function")
})

test("test works with yields", function* (assert) {
    var pkg = path.join(__dirname, "..", "package.json")
    var file = yield fs.readFile.bind(null, pkg)

    var json = JSON.parse(file)
    assert.equal(json.name, "tape-generators")
})
