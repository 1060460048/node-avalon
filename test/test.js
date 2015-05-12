//https://github.com/nelsonic/learn-mocha

//console.wain("必须全局安装mocha https://github.com/nelsonic/learn-mocha")
var path = require("path")
var parse5 = require('parse5')
global.parser = new parse5.Parser()
global.serializer = new parse5.Serializer()
global.avalon = require('../avalon')
global.expect = require("./expect")
global.heredoc = function (fn) {
    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '')
}

var files = ["data","if"]
files.forEach(function (val) {
    var filePath = path.resolve(process.cwd(), val)
    require(filePath)
    
})
//describe

