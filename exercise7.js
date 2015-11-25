var _ = require('lodash');

var ordered = function(orders) {
  var result = [];
  var grouped = _.groupBy(orders, 'article');

  _.forEach(grouped, function(value, article) {
    result.push({
      article: parseInt(article),
      total_orders: _.reduce(value, function(sum, value) {
        return sum + value.quantity;
      }, 0)
    });
  });

  return _.sortBy(result, 'total_orders').reverse();
}

module.exports = ordered;
