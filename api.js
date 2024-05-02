const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5000;

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'quiz';

app.use(cors());
app.use(bodyParser.json());

app.post('/createUser', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('authenticate');

    // Check if the user already exists
    const existingUser = await collection.findOne({ username: req.body.username });
    if (existingUser) {
      client.close();
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Insert the user into the database
    const result = await collection.insertOne({...req.body,isAdmin:"false"});
    res.json({ message: 'User created successfully'});

    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/loginUser', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('authenticate');

    // Assuming req.body contains login credentials
    const user = await collection.findOne({ username: req.body.username, password: req.body.password });
    if (user) {
      res.json({ message: 'Login successful', data: user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }

    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/fetchQuestions', async (req, res) => {
  try {
    const client = new MongoClient(mongoURI);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('questions');

    const questions = await collection.find({}).toArray();
    res.json({ questions });

    client.close();
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
