#!/usr/bin/env node

var fs = require('fs')
var spiffing = require('../lib/spiffing.js')

input = process.argv[2]
isDir(input) ? convertCssFilesInCurrentDir( (input || ".") ) : convertFile(input);

function isDir(input) {
  return input ? fs.lstatSync(input).isDirectory() : true
}

function convertCssFilesInCurrentDir(dir) {
  var glob = require('glob')
  var files = []

  glob(dir + "/*.css", function (err, results) {
    for( i = 0; i < results.length; i++) {
      if(!results[i].match("-converted.css")) {
        convertFile(results[i]);
      }
    }
  });
}

function convertFile(file) {
  spiffing(file);
  console.log("Converted " + file + "!");
}
