# Online_Quiz_Web_Application  

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
Database: bs  
Collection: users  

[
  {
    "_id": "66471a2a15f6339ebb164a39",
    "username": "deepak",
    "password": "123",
    "cart": [
      "",
      "book3",
      "book4"
    ]
  },
  {
    "_id": "664a2b90de43965a1a3ae78b",
    "username": "dee",
    "password": "123",
    "cart": [
      "",
      "book2",
      "book3"
    ]
  },
  {
    "_id": "664a472e40cb1be0f304e2eb",
    "username": "abc",
    "password": "123",
    "cart": [
      "",
      "book1",
      "book2"
    ]
  }
]

  
Future Enhancements  
Add more quiz categories and questions.  
Include a feature for user analytics and quiz feedback.  
Implement a leaderboard for users to compare scores.
