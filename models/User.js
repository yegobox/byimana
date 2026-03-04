let mongoose = require('mongoose');
let moment = require('moment');
// Create Schema
let UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: moment(Date.now()).format("DD/MM/YYYY")
  }
},{collection: 'Users'});

module.exports = mongoose.model('user', UserSchema);
