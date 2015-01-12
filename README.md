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
``

Return example.

```
[ { loc: 'http://www.telemark.no/Vaare-tjenester',
    lastmod: '2012-11-26T06:24:29+00:00' },
  { loc: 'http://www.telemark.no/Vaare-tjenester/Kurs-og-konferanser',
    lastmod: '2014-10-06T11:40:22+00:00' },
  { loc: 'http://www.telemark.no/Vaare-tjenester/Folkehelse',
    lastmod: '2014-11-07T08:34:38+00:00' },
  { loc: '\n            http://www.telemark.no/Vaare-tjenester/Folkehelse/Tilbud-HEFRES/Aktivitetsdager-Uten-grenser-der-ALT-er-mulig\n        ',
    lastmod: '2014-09-16T07:16:03+00:00' },
  { loc: 'http://www.telemark.no/Aktuelt/Verdensarvsoeknaden-paa-vei-til-Unesco',
    lastmod: '2014-02-28T12:10:42+00:00' } ]
```