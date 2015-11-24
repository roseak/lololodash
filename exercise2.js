var _ = require('lodash');

var sorted = function(items) {
  return _.sortBy(items, 'quantity').reverse();
};

module.exports = sorted;
