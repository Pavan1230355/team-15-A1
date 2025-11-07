const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  course: String,
  type: String,
  question: String,
  options: [String],
  answer: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Question', QuestionSchema);
