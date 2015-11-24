var _ = require('lodash');

var chained = function(words) {
  return _.chain(words)
    .map(function(word) {
      return (word + 'Chained').toUpperCase();
    })
    .sort();
};

module.exports = chained;
