
let Backbone          = require('backbone');
let restaurantStore   = require('../../stores/restaurant-store');
let restaurantActions = require('../../actions/restaurant-actions');
let template          = require('./restaurant-list.jade');

let View = Backbone.View.extend({

  initialize: function() {
    this.state = this.getInitialState();
    restaurantStore.register(() => this.onRestaurantStoreChanged());
    restaurantActions.getRestaurants();
    this.subviews = [];
  },

  // todo handle remove of component

  getInitialState: function() {
    return {
      title: 'Restaurants',
      restaurants: restaurantStore.getState()
    };
  },

  setState: function(newState) {
    this.state = Object.assign(
      this.state,
      newState
    );
    this.render();
  },

  onRestaurantStoreChanged: function() {
    let storeState = restaurantStore.getState();
    this.setState({ restaurants: storeState });
  },

  render: function() {
    console.log('rendering restaurant list');
    let ListItem = require('./restaurant-listitem');

    // render parent view
    let html = template(this.state);
    this.$el.html(html);

    // render child views
    let childContainer = this.$el.find('.restaurant-list');
    let restaurants = this.state.restaurants.restaurants;
    for(let restaurant of restaurants) {
      let props = { restaurant };
      this.subviews.push(new ListItem({ el: childContainer, model: props }));
    }

    return this;
  }

});

module.exports = View;
