'use strict';

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

/**
 *@desc unwraps arrays to value
 *
 * @param {object} item - The object from
 * @returns {object} newItem - The unwrapped item
 */
function unWrap(item) {
  var newItem = {};

  Object.keys(item).forEach(function(prop) {
    newItem[prop] = item[prop][0];
  });

  return newItem;
}

/**
 * sitemapToArray
 *
 * @desc converts sitemap.xml to an array of objects
 *
 * @param {string} data - The sitemap xmldata as string
 * @param {callback} callback - The callback for handling the response
 * @returns {object}
 */
function sitemapToArray(data, callback) {
  if (!data) {
    return callback(new Error('Missing required input: data'), null);
  }

  parser.parseString(data, function(err, result) {
    return err ? callback(err, null) : callback(null, result.urlset.url.map(unWrap));
  });

}

module.exports = sitemapToArray;
