const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
  .then(() => {
    console.log("Database Connected Successfully!!");
  })
  .catch(err => {
    console.error('Could not connect to the database:', err);
    process.exit();
  });

// Routes
const UserRoute = require('./app/routes/User');
app.use('/user', UserRoute);

// Root route
app.get('/', (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});

// Start server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
