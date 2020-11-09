var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: Number,
  phoneNum: Number,
  cardNum: Number,
  expiry: String,
  cvv: Number,
  cardZipcode: Number
})

var User = new mongoose.model('User', userSchema);

var getUserInfo = (id, callback) => {
  User.findById(id, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data)
    }
  })
}

var newUser = (callback) => {
  User.create({}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      console.log(data);
      callback(null, data);
    }
  })
}

var updateUser = (data, callback) => {
  var id = data.id;
  delete data.id;
  User.findByIdAndUpdate(id, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  })
}

module.exports.newUser = newUser;
module.exports.updateUser = updateUser;
module.exports.getUserInfo = getUserInfo;