

module.exports = {

  getRestaurants: function(callback) {
    callback(null, [
      { name: 'Betos' },
      { name: 'Mineos' },
      { name: 'Uncle Sams' },
      { name: 'McSloppies' }
    ]);
  }

};

