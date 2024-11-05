const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes.js');

const app = express();
app.use(bodyParser.json());
// Use the user routes
app.use('/api', userRoutes);

module.exports = app;
