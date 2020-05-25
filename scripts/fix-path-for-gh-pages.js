#! /usr/bin/env node

// `baseUrl` stencil config output property isn't working
// BUG: https://github.com/ionic-team/stencil/issues/651

var fs = require('fs');

var path = '/rule-of-thumb/';
var indexHtml = 'docs/index.html';

fs.readFile(indexHtml, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var result = data
    .replace(/="\//g, '="' + path)
    .replace(/\('\//g, "('" + path);

  fs.writeFile(indexHtml, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
