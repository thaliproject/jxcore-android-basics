// License information is available from LICENSE file

// this is the file works under jxcore
var fs = require('fs');
var path = require('path');

console.log("Hello To LogCat!", fs.readdirSync('jxcore/node_modules'));

// requiring a node module
var jsnice = require('json-nice');

// test jxm
var jxm = require('jxm');

if (jxm) {
  console.log('jxm test passed');
}

var obj = {
  a: 1,
  b: 2
};
console.log("from node module:", jsnice(obj));

exports.concat = function(a, b, cb) {
  cb(a + b);
};

var express = require("express");
var pouchDBApp = express();
var PouchDB = require("pouchdb");
var InMemPouchDB = PouchDB.defaults({db: require("memdown")});

// Set up our test server
pouchDBApp.use("/", require("express-pouchdb")(InMemPouchDB, {mode: "minimumForPouchDB"}));
// Node tests by default will look at http://localhost:5984
pouchDBApp.listen(5984);

var eek = require('pouchdb/tests/performance/index.js');
