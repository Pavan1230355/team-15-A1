# QuickQuiz - Interactive Learning Platform

A full-stack quiz application built with HTML, CSS, JavaScript (frontend) and Node.js, Express, MongoDB (backend).

## 🚀 Features

### Frontend
- **Interactive Quiz System** - Multiple choice, fill-in-the-blank, and true/false questions
- **Course-Based Quizzes** - HTML, CSS, JavaScript, MongoDB, MySQL, Java
- **Manual Quiz Creation** - Create custom quizzes on the fly
- **Dashboard** - Track your quiz attempts and progress
- **Projects Gallery** - Explore project ideas by technology
- **Responsive Design** - Works on all devices
- **Dark/Light Theme** - Toggle between themes

### Backend
- **RESTful API** - Express.js server with MongoDB integration
- **Question Management** - 300+ questions across multiple courses
- **Progress Tracking** - Store and retrieve user quiz attempts
- **Project Database** - Curated project ideas and resources

## 📁 Project Structure

```
FEDF Project/
├── backend/                    # Backend Server
│   ├── server.js               # Express server with API routes
│   ├── seed.js                 # Database seeding script
│   ├── models/                 # Mongoose schemas
│   │   ├── question.js
│   │   ├── project.js
│   │   └── attempt.js
│   ├── questions.json          # Quiz questions data
│   ├── projects.json           # Project ideas data
│   └── package.json
│
└── frontend/                   # Frontend Application
    ├── indexx.html             # Landing page
    ├── courses.html            # Course selection
    ├── quizz.html              # Quiz interface
    ├── projects.html           # Project ideas gallery
    ├── dashboard.html          # User progress dashboard
    ├── login.html              # Login page
    ├── register.html           # Registration page
    └── pictures/               # Images and assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Community Edition)
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file with:
   ```
   MONGO_URI=mongodb://localhost:27017/quickquiz
   PORT=4000
   ```

4. **Seed the database:**
   ```bash
   node seed.js
   ```

5. **Start the server:**
   ```bash
   npm start
   ```
   Server will run on `http://localhost:4000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Open in browser:**
   - Simply open `indexx.html` in your web browser
   - Or use Live Server extension in VS Code

## 🔌 API Endpoints

### Questions
- `GET /api/questions?course={course}&limit={number}` - Get random questions
  - Example: `/api/questions?course=HTML&limit=10`

### Projects
- `GET /api/projects?course={course}&q={search}` - Search projects
  - Example: `/api/projects?course=JavaScript`

### Attempts
- `POST /api/attempts` - Save quiz attempt
  ```json
  {
    "userId": "user@example.com",
    "course": "HTML",
    "score": 8,
    "total": 10
  }
  ```
- `GET /api/attempts/:userId` - Get user's quiz history

## 💻 Usage

1. **Take a Course Quiz:**
   - Go to "Quizzes" page
   - Select a course (HTML, CSS, JS, etc.)
   - Set number of questions (1-10)
   - Set timer per question
   - Click "Start Course Quiz"

2. **Create Manual Quiz:**
   - Go to "Quizzes" page
   - Choose question type (MCQ, Fill, True/False)
   - Enter question and options
   - Add multiple questions
   - Click "Start Manual Quiz"

3. **Explore Projects:**
   - Go to "Projects" page
   - Browse projects by category
   - Search for specific technologies
   - Click on any project for details

4. **Track Progress:**
   - Go to "Dashboard" page
   - View your quiz history
   - See performance charts
   - Track improvement over time

## 🎨 Technologies Used

### Frontend
- HTML5
- CSS3 (Modern layouts, animations)
- JavaScript (ES6+)
- Chart.js (Progress visualization)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- CORS
- dotenv

## 🔒 Security Notes

- `.env` file is excluded from Git (contains sensitive data)
- `node_modules` excluded from repository
- CORS enabled for frontend-backend communication
- Input validation on API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👥 Team

Team 15-A1

## 🐛 Known Issues

- Ensure MongoDB is running before starting the backend
- Make sure backend is running on port 4000 before testing frontend
- Browser may block fetch requests if files are opened directly (use Live Server)

## 🚀 Future Enhancements

- User authentication with JWT
- Quiz categories expansion
- Real-time multiplayer quizzes
- Leaderboard system
- Mobile app version
- Advanced analytics dashboard

## 📞 Support

For issues or questions, please open an issue on GitHub.

---
**Built with ❤️ by Team 15-A1**
