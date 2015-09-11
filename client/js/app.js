
let React          = require('react');
let RestaurantList = require('./components/restaurant-list.jsx');

React.render(<RestaurantList />, document.getElementById('app'));


/**
let restaurantList2 = require('./components/restaurant-list.jade');
let app2 = document.getElementById('app2');
app2.innerHTML = restaurantList2({ title: 'Hello', restaurants: [ { name: 'betos' }] });
**/