var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

var publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

var db = require('./db/connection.js');

app.get('/users', (req, res) => {
  db.connection.query('SELECT * from users', (err , data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  })
});

app.post('/newUser', (req, res) => {
  res.send('yoo');
});

app.post('/userInfo', (req, res) => {
  res.send('hiiiiii');
});

app.post('/userAddress', (req, res) => {
  res.send('address dedo');
});

app.post('/userCardInfo', (req, res) => {
  res.send('card dedo');
});

app.post('/users', (req, res) => {
  var query = `INSERT INTO users (name, email, password, line1, line2, city, state, zipcode, phoneNum, cardNum, expiry, cvv, cardZipcode) VALUES ('kp', 'kp@gmail.com', '1234', 'abc road', '', 'San Francisco', 'CA', 63425, 746298765, 268462976, '06/24', 554, 56397)`;
  db.connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      console.log(data);
      res.sendStatus(200);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});