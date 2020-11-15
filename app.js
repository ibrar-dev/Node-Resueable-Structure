'use strict'
const express = require('express');
const bodyParser = require('body-parser');

// Routes
const authRoutes = require('./_routes/auth')

// End Routes

const {PORT} = require('./env');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
});

app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({ extended: false}))




// Routes Started 
// Register Routes
app.use('/api', authRoutes);

// Routes End


app.use((req, res, next) => {
    res.status(404).json('404 Api not found');
});

app.listen(PORT)
