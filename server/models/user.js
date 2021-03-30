const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
