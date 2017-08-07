const express = require('express');
const app = express();

app.get('/colors', function(req, res) {
  res.json([
    'Yellow',
    'Blue',
    'Maroon',
    'Violet',
    'Green'
  ]);
  console.log('GET 200 ' + req.path);
});

app.listen(3000, function() {
  console.log('Example API listening on port 3000');
});
