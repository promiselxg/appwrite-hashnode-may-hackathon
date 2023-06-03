const express = require('express');
const { sendSingleSMS, sendBulkSMS } = require('../controllers/sms.controller');
const router = express.Router();

// Mount Routes
router.route('/single').post(sendSingleSMS);
router.route('/bulk').post(sendBulkSMS);

module.exports = router;
