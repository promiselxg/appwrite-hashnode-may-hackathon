const express = require('express');
const {
  sendSingleSMS,
  sendBulkSMS,
  createContact,
  listContactGroups,
} = require('../controllers/sms.controller');
const { uploadFile } = require('../middlewares/upload.middleware');
const router = express.Router();

// Mount Routes
router.route('/single').post(sendSingleSMS);
router.route('/bulk').post(sendBulkSMS);
router.route('/bulk/contact').post(uploadFile.single('files'), createContact);
router.route('/group').get(listContactGroups);

module.exports = router;
