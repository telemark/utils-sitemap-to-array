#utils-sitemap-to-array
Module for converting Sitemap.xml to array of objects [![Build Status](https://travis-ci.org/telemark/utils-sitemap-to-array.svg?branch=master)](https://travis-ci.org/telemark/utils-sitemap-to-array)

##Installation
```
$ git clone git@github.com:telemark/utils-sitemap-to-array.git
```

##Usage
Pass in the xml as string.

###Example

```
'use strict';

var http = require('http');
var smta = require('utils-sitemap-to-array');
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
```