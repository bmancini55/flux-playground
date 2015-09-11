
let React = require('react');

module.exports = React.createClass({

  render: function() {
    let restaurant = this.props.restaurant;

    return (
      <li>{restaurant.name}</li>
    );
  }

});

