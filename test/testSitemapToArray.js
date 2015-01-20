'use strict';

var assert = require('assert');
var fs = require('fs');
var sitemapToArray = require('../index');
var siteMap = fs.readFileSync('test/sitemap.xml', 'utf-8').toString();

describe('sitemapToArray', function() {

  it('requires data', function(done) {

    var data = false;

    sitemapToArray(data, function(err, arr) {
      assert.throws(function() {
          if (err) {
            throw err;
          } else {
            console.log(arr);
          }
        }, function(err) {
          if ((err instanceof Error) && /Missing required input: data/.test(err)) {
            return true;
          }
        },
        'Unexpected error'
      );
      done();
    });

  });

  it('returns an array', function(done) {
    sitemapToArray(siteMap, function(err, arr) {
      if (err) {
        throw err;
      }

      assert(Array.isArray(arr));

      done();
    });

  });

  it('returns an array with unwrapped objects', function(done) {
    sitemapToArray(siteMap, function(err, arr) {
      if (err) {
        throw err;
      }

      assert.equal(arr[0].loc, 'http://www.telemark.no/Vaare-tjenester');

      done();
    });

  });

});
