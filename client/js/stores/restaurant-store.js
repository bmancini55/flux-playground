
let EventEmitter = require('events').EventEmitter;
let dispatcher   = require('../dispatcher');

let instance = Object.assign({}, EventEmitter.prototype, {

  initialize: function() {
    this.restaurants = null;

    dispatcher.register((action) => {
      switch(action.type) {
        case 'restaurants_get_success':
          this.onGetRestaurantsSuccess(action.payload);
          break;
        case 'restaurants_get_error':
          console.log('Loading error: ' + action.error);
          break;
      };
    });

  },

  register: function(callback) {
    this.on('change', callback);
  },

  unregister: function(callback) {
    this.removeListener('change', callback);
  },

  getState: function() {
    return {
      restaurants: this.restaurants
    };
  },

  onGetRestaurantsSuccess: function(restaurants) {
    this.restaurants = restaurants;
    this.emit('change');
  }

});

instance.initialize();
module.exports = instance;
