/*
    How to start the express server:
    "start": "node server",
    "server": "nodemon server"
*/
// import express
const express = require('express');

// import mongoDB connection method
const connectDB = require('./config/db');

// initialize an app using express
const app = express();

// Connect Database
connectDB();

// get the root    
app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// set a variable for the port, either through environment variables or hard-coded
const PORT = process.env.PORT || 5000;

// set your app to listen on the port we set then log a message notifying us.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


