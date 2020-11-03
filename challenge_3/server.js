var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

var publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(bodyParser.json());

var db = require('./db/connection.js');

app.get('/users', (req, res) => {
  console.log(req.query);
  db.connection.query(`SELECT * from users where id = ${req.query.id}`, (err , data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  })
});

app.post('/newUser', (req, res) => {
  var query = `INSERT INTO users VALUES ()`;
  db.connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data.insertId);
    }
  })
});

app.post('/userInfo', (req, res) => {
  var user = req.body;
  var query = `UPDATE users SET name = '${user.name}', email = '${user.email}', password = '${user.password}' where id = ${user.id}`;
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

app.post('/userAddress', (req, res) => {
  var user = req.body;
  var query = `UPDATE users SET line1 = '${user.line1}', line2 = '${user.line2}', city = '${user.city}', state = '${user.state}', zipcode = ${user.zipcode}, phoneNum = ${user.phoneNum} where id = ${user.id}`;
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

app.post('/userCardInfo', (req, res) => {
  var user = req.body;
  var query = `UPDATE users SET cardNum = ${user.cardNum}, expiry = '${user.expiry}', cvv = ${user.cvv}, cardZipcode = ${user.cardZipcode} where id = ${user.id}`;
  db.connection.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});