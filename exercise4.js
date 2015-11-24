var _ = require('lodash');
var temped = function(cities) {
  var final = { hot: [],
            warm: []
          };

  function greater19(temp) {
    return temp > 19;
  };

  _.forEach(cities, function(values, city) {
    if (_.every(values, greater19)) {
      final.hot.push(city);
    } else if (_.some(values, greater19)) {
      final.warm.push(city);
    };
  });
  return final;
};

module.exports = temped;
