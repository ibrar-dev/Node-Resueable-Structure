'use strict'
const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
});

// app.use(bodyParser.json({limit: '150mb'}));
// app.use(bodyParser.urlencoded({ extended: false}))

app.use((req, res, next) => {
    res.status(404).json('404 Api not found');
});

app.listen(PORT)
