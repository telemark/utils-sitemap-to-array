'use strict';

var xml2js = require('xml2js')
  , parser = new xml2js.Parser()
  ;

function sitemapToArray(data, callback){
  if(!data){
    return callback(new Error('Missing required input: data'), null);
  }

  parser.parseString(data, function (err, result) {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, result);
    }
  });

}

module.exports = sitemapToArray;