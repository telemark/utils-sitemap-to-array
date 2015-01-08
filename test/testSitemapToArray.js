'use strict';

var assert = require('assert')
  , sitemapToArray = require('../index');
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

});