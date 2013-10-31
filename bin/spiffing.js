#!/usr/bin/env node

var fs = require('fs')
var path = require("path")
var spiffing = require('../')

var input = process.argv[2] || "."

if (isDir(input)) convertCssFilesInCurrentDir(input)
else convertFile(input)

function isDir(input) {
  return input ? fs.lstatSync(input).isDirectory() : true
}

function convertCssFilesInCurrentDir(dir) {
  var glob = require('glob')
  var files = []

  glob(dir + "/*.css", findAndProcessFiles )
}

function findAndProcessFiles(err, results) {
  results.filter(function(result){
    return !result.match("-converted.css")
  }).map(convertFile)
}

function convertFile(file) {
  fs.readFile( file, "utf8" , function(errRead, data) {
    if (errRead) throw errRead

    filename = path.basename(file, '.css')
    new_filename = filename + "-converted.css"
    filepath = path.dirname(file)
    
    fs.writeFile( filepath + "/" + new_filename , spiffing(data), function (errWrite) {
      if (errWrite) throw errWrite
      console.log("Converted " + file + " to " + new_filename + "!")
    })

  })
}
