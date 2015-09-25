
let React             = require('react');
let restaurantStore   = require('../../stores/restaurant-store');
let restaurantActions = require('../../actions/restaurant-actions');

module.exports = React.createClass({

  componentDidMount: function() {
    restaurantStore.register(this.onRestaurantStoreChanged);
    restaurantActions.getRestaurants();
  },

  componentWillUnmount: function() {
    restaurantStore.unregister(this.onRestaurantStoreChanged);
  },

  getInitialState: function() {
    return {
      title: 'Restaurants',
      restaurants: restaurantStore.getState()
    };
  },

  onRestaurantStoreChanged: function() {
    let newState = restaurantStore.getState();
    this.setState({ restaurants: newState });
  },

  render: function() {
    let Restaurant  = require('./restaurant-listitem.jsx');
    let title       = this.state.title;
    let restaurants = this.state.restaurants.restaurants || [];

    return (
      <div className='container restaurants'>
        <h1>{title}</h1>
        <ul className='restaurant-list'>
          { restaurants.map((r, idx) => <Restaurant key={idx} restaurant={r} />) }
        </ul>
      </div>
    );
  }

});
