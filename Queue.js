var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Queue');
});

app.listen(20, function () {
  console.log('Queue hosted and query!');
});