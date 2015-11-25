var _ = require('lodash');

var comment_count = function(comments) {
  var result = [];
  var grouped = _.groupBy(comments, 'username');

  _.forEach(grouped, function(value, username) {
    result.push({
      username: username,
      comment_count: _.size(value)
    });
  });

  return _.sortBy(result, 'comment_count').reverse();
};

module.exports = comment_count;
