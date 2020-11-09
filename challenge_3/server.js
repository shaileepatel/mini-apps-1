var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000;

var publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(bodyParser.json());

var db = require('./db/mongodb');

app.get('/users', (req, res) => {
  db.getUserInfo(req.query.id, (err , data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  })
});

var updateUser = (req, res) => {
  var user = req.body;
  db.updateUser(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
};

app.post('/newUser', (req, res) => {
  db.newUser((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data._id);
    }
  })
});

app.post('/userInfo', updateUser);

app.post('/userAddress', updateUser);

app.post('/userCardInfo', updateUser);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});