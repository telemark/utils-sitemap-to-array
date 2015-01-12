'use strict';

var http = require('http');
var smta = require('./index');
var sitemapUrl = 'http://www.telemark.no/sitemap.xml';
var body = '';


function handleResponse(err, result){
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
}

http.get(sitemapUrl, function(res) {

  res.on('data', function(buf){
    body += buf.toString();
  });

  res.on('end', function(){
    smta(body, handleResponse);
  });

}).on('error', function(e) {
  console.error(e);
});