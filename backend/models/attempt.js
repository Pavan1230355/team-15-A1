const mongoose = require('mongoose');
const AttemptSchema = new mongoose.Schema({
  userId: String,
  course: String,
  score: Number,
  total: Number,
  percent: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Attempt', AttemptSchema);
