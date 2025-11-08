require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

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

const Question = mongoose.model('Question', questionSchema, 'questions');
const Project  = mongoose.model('Project', projectSchema, 'projects');

async function loadJson(file) {
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p,'utf8');
  try { return JSON.parse(txt); } catch(e) { console.error('Invalid JSON in', file); return null; }
}

async function main(){
  const questions = await loadJson('questions.json');
  const projects = await loadJson('projects.json');

  if (questions && Array.isArray(questions) && questions.length>0) {
    console.log('Inserting', questions.length, 'questions...');
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log('Questions inserted');
  } else {
    console.log('questions.json not found or empty - skipping questions import');
  }

  if (projects && Array.isArray(projects) && projects.length>0) {
    console.log('Inserting', projects.length, 'projects...');
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Projects inserted');
  } else {
    console.log('projects.json not found or empty - skipping projects import');
  }

  console.log('Seed finished');
  process.exit(0);
}

main();
