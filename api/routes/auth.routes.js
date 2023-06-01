const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require('../controllers/auth.controller.js');

// Mount Routes
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

module.exports = router;
