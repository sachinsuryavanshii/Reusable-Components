// src/routes/userRoutes.js

const express = require('express');
const { createUser } = require('./userService.js');
const logger = require('./logger.js');
const router = express.Router();

// Route to create a new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  const result = createUser(name, email);
  
  if (result.error) {
    return res.status(400).json(result);
  }
  res.status(201).json(result);

});

module.exports = router;
