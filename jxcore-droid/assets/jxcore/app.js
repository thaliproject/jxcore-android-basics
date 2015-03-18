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

//jxcore.tasks.addTask(function() {
//  // ugly patching
//  var base_path = process.cwd();
//  console.log("our base path is " + base_path);
//  process.cwd = function () {
//    //return base_path + "/jxcore_app/";
//    return "/data/data/com.nubisa.jxcore/files";
//  };
//
//  var express = require("express");
//  var pouchDBApp = express();
//  var PouchDB = require("pouchdb");
//  var InMemPouchDB = PouchDB.defaults({db: require("memdown")});
//
//  var http = require('http');
//  http.setMaxHeaderLength(0);
//
//  // Set up our test server
//  pouchDBApp.use("/", require("express-pouchdb")(InMemPouchDB, {mode: "minimumForPouchDB"}));
//  // Node tests by default will look at http://localhost:5984
//  pouchDBApp.listen(5984);
//
//  require('pouchdb/tests/performance/index.js');
//});


// JXCore has a very useful security feature that limits the maximum size of HTTP request headers
// But apparently the PouchDB tests require a larger size than the default maximum. So we disable
// the check here.
var http = require("http");
http.setMaxHeaderLength(0);

var express = require("express");
var pouchDBApp = express();
var PouchDB = require("pouchdb");
var InMemPouchDB = PouchDB.defaults({db: require("memdown")});

// Set up our test server
pouchDBApp.use("/", require("express-pouchdb")(InMemPouchDB, {mode: "minimumForPouchDB"}));
// Node tests by default will look at http://localhost:5984
pouchDBApp.listen(5984);

var eek = require('pouchdb/tests/performance/index.js');
