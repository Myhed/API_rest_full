const express = require('express');
const router = require('./userController');
const db = require('./db');
const app = express();

const userController = require('./userController');
app.use('/users', userController);
module.exports = app;
