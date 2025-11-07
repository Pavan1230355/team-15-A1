const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  course: String,
  title: String,
  description: String,
  repo: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Project', ProjectSchema);
