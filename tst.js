'use strict';

var http = require('http')
  , smta = require('./index')
  , sitemapUrl = 'http://www.telemark.no/sitemap.xml'
  , body = ''
  ;

function handleResponse(err, result){
  if(err){
    console.error(err);
  } else {
      console.log(result);
  }
}

http.get(sitemapUrl, function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data', function(buf){
    body += buf.toString();
  });
  res.on('end', function(){
    smta(body, handleResponse);;
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

