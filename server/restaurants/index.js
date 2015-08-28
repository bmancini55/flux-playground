
let express = require('express');
let app     = express();

app.get('/api/restaurants', function(req, res) {
  res.json([
    { name: 'Betos' },
    { name: 'Mineos' },
    { name: 'Uncle Sams' },
    { name: 'McSloppies' }
  ]);
});

module.exports = app;