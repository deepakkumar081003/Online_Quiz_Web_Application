# Online_Quiz_Web_Application  

Switch to master branch to see the code  

Description  
This Online Quiz web application allows users to log in and participate in quizzes, while administrators can log in to manage users and view their scores. The platform is built with a dual-login system for both users and admins.  
  
Features  
User Login: Users can create an account and participate in quizzes.  
Admin Login: Admins can view and manage user scores.  
Real-Time Scoring: Scores are updated in real-time as users complete quizzes.  
Quiz Timer: Each quiz has a timer to keep track of the user's time.  
  
Tech Stack  
Frontend: HTML, CSS, JavaScript, React.js  
Backend: Node.js, Express.js  
Database: MongoDB  
  
How to Run  
  
Clone the repository:  
git clone https://github.com/your-username/online-quiz-app.git  
  
Install dependencies:  
npm install  

Make sure you open two terminals for running the server and frontend code  
Also make sure you are in the correct folder before running the code  

Run the frontend React app (from root folder):  
npm start  

Run the backend server:  
npm run server.js  

MongoDB requirements  
Database: quiz  
Collection: authenticate,questions,results  
  
Authentication Collection
This collection stores authentication details for users, including their username, password, and whether they have admin privileges.
{
  "_id": ObjectId("66483e672f6e7a5d87792d8d"),
  "username": "jayathri",
  "password": "123",
  "isAdmin": false
},
{
  "_id": ObjectId("66485a64f4bcf5db87793a4f"),
  "username": "admin",
  "password": "admin",
  "isAdmin": true
},  
{
  "_id": ObjectId("66485a88e7f4bcfb0e1ecc66"),
  "username": "deepak",
  "password": "123",
  "isAdmin": false
}

Questions Collection  
This collection stores quiz questions along with the available options and the correct answer index.  
{
  "_id": ObjectId("66485e7dfacd3d0d6e52a4eb"),
  "question": "How many players are there in a cricket team?",
  "options": ["10", "11", "12", "13"],
  "answerIndex": 1
},
{
  "_id": ObjectId("66485e7dfacd3d0d6e52a4ec"),
  "question": "Which of these countries does not play test cricket?",
  "options": ["India", "Australia", "Nepal", "England"],
  "answerIndex": 2
},
{
  "_id": ObjectId("66485e7dfacd3d0d6e52a4ed"),
  "question": "What is the full form of IBM?",
  "options": ["International Business Management", "Indian Business Machines", "International Business Machines", "Indian Business Management"],
  "answerIndex": 2
}

Results Collection
This collection stores the quiz results for different users.  
{
  "_id": ObjectId("66483e56df12acb87ac48e7b"),
  "username": "Jayathri",
  "result": 8.5
},
{
  "_id": ObjectId("66485a56fb1f4bcfba1ecc67"),
  "username": "Deepak",
  "result": 8.7
},
{
  "_id": ObjectId("66483e64ae3d2655d448d67f"),
  "username": "Arvind",
  "result": 0
}    
  
Future Enhancements  
Add more quiz categories and questions.  
Include a feature for user analytics and quiz feedback.  
Implement a leaderboard for users to compare scores.
