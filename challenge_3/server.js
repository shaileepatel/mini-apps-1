var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

var publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});