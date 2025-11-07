require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || '';
if (!MONGO_URI) {
  console.error('MONGO_URI not set. Copy .env.example to .env and set MONGO_URI.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> { console.error('MongoDB connection error:', err); process.exit(1); });

const questionSchema = new mongoose.Schema({}, { strict: false });
const projectSchema  = new mongoose.Schema({}, { strict: false });
const attemptSchema  = new mongoose.Schema({
  userId: String,
  course: String,
  score: Number,
  total: Number,
  percent: Number,
  createdAt: { type: Date, default: Date.now }
});

const Question = mongoose.model('Question', questionSchema, 'questions');
const Project  = mongoose.model('Project', projectSchema, 'projects');
const Attempt  = mongoose.model('Attempt', attemptSchema, 'attempts');

app.get('/', (req,res)=> res.json({ok:true, msg:'QuickQuiz backend running'}));

app.get('/api/questions', async (req, res) => {
  try {
    const course = req.query.course;
    const limit = Math.min(parseInt(req.query.limit) || 10, 100);
    if (!course) return res.status(400).json({ error: 'course required' });
    const docs = await Question.aggregate([{ $match: { course } }, { $sample: { size: limit } }]);
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/projects', async (req, res) => {
  try {
    const q = (req.query.q || '').trim();
    const course = req.query.course;
    const filter = {};
    if (course) filter.course = course;
    if (q) filter.$text = { $search: q };
    const docs = await Project.find(filter).limit(100);
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/attempts', async (req, res) => {
  try {
    const { userId, course, score, total } = req.body;
    const percent = total ? Math.round(score / total * 100) : 0;
    const a = await Attempt.create({ userId, course, score, total, percent });
    res.json(a);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/attempts/:userId', async (req, res) => {
  try {
    const attempts = await Attempt.find({ userId: req.params.userId }).sort({ createdAt: 1 });
    res.json(attempts);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Server listening on port', PORT));
