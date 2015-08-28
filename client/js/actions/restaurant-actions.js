
let dispatcher = require('../dispatcher');
let service    = require('../services/restaurant-service');

module.exports = {

  getRestaurants: function() {
    service.getRestaurants((err, restaurants) => {
      if (err)
        dispatcher.dispatch({
          type: 'restaurants_get_error',
          error: err
        });
      else
        dispatcher.dispatch({
          type: 'restaurants_get_success',
          payload: restaurants
        });
    });
  }

};
