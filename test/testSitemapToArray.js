'use strict';

var assert = require('assert')
  , fs = require('fs')
  , sitemapToArray = require('../index')
  , siteMap = fs.readFileSync('test/sitemap.xml', 'utf-8').toString()
;

describe('sitemapToArray', function(){

  it('requires data', function(done){

    var data = false;

    sitemapToArray(data, function(err, arr){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required input: data/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('returns an array', function(done){

    var data = siteMap;

    sitemapToArray(data, function(err, arr){
      if(err) throw err;

      assert.equal(arr[0].loc, 'http://www.telemark.no/Vaare-tjenester');

      done();
    });

  });

  it('returns an array with unwrapped objects', function(done){

    var data = siteMap;

    sitemapToArray(data, function(err, arr){
      if(err) throw err;

      assert.equal(arr[0].loc, 'http://www.telemark.no/Vaare-tjenester');

      done();
    });

  });

});