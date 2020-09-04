const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  googleId: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: {type: String, minlength: 5},
  avatar: String,
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);