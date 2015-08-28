
let restaurantActions = require('./actions/restaurant-actions');
let restaurantStore = require('./stores/restaurant-store');

restaurantStore.register(function() {

  console.log(restaurantStore.getState());

});

restaurantActions.getRestaurants();