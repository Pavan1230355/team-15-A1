<<<<<<< HEAD
QuickQuiz backend
-----------------

1. Copy .env.example to .env and set MONGO_URI.
2. Place your questions.json and projects.json (arrays of documents) into this folder if you want to seed.
3. Install dependencies:
   npm install
4. To seed the DB (optional):
   node seed.js
5. Start server:
   node server.js
6. API endpoints:
   GET  /api/questions?course=HTML&limit=10
   GET  /api/projects?q=search&course=HTML
   POST /api/attempts  { userId, course, score, total }
   GET  /api/attempts/:userId
=======
# FEDF-Backend
>>>>>>> ec371cbd0300b5b7dc73d9d8145a10e9e9ab1d0f
