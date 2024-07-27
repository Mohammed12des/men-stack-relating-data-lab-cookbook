const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry:[foodSchema]
});
const foodSchema = new mongoose.Schema({
  name:{String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
