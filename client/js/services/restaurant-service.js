
let xhr = require('superagent');

module.exports = {

  getRestaurants: function(callback) {
    xhr
      .get('/api/restaurants')
      .end(function(err, result) {
        callback(err, result.body);
      });
  }

};

