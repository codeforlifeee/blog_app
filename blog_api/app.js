const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded, json } = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Import routes
const blogRoute = require('../blog_api/routes/blog');
const categoryRoute = require('../blog_api/routes/category');
const authRoute = require('../blog_api/routes/auth');
const commentRoute = require('../blog_api/routes/comment');

// -------------------------------------------------------------
// Middleware
// -------------------------------------------------------------

// HTTP request logger
app.use(morgan('dev'));

// Body parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// -------------------------------------------------------------
// Database Connection
// -------------------------------------------------------------

mongoose.connect('mongodb+srv://blogapp:sanchit123@blogapp.hawqpha.mongodb.net/?retryWrites=true&w=majority&appName=blogapp')
mongoose.connection.on('connected', () => {
    console.log('connected with database');
});

mongoose.connection.on('error', (err) => {
    console.log('connection failed');
    console.log(err);
});

// -------------------------------------------------------------
// Routes
// -------------------------------------------------------------

// Blog routes
app.use('/blog', blogRoute);

// Category routes
app.use('/category', categoryRoute);

// Authentication routes
app.use('/auth', authRoute);

// Comment routes
app.use('/comment', commentRoute);

// -------------------------------------------------------------
// Error Handling
// -------------------------------------------------------------

// Catch-all route for handling invalid requests
app.use((req, res) => {
    res.status(200).json({
        msg: 'bad request'
    });
});

module.exports = app;
