var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

var publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

var db = require('./db/connection.js');

app.get('/users', (req, res) => {
  res.send('received');
});

app.post('/users', (req, res) => {
  res.send('received');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});