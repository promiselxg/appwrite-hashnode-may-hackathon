const express = require('express');
const {
  sendSingleSMS,
  sendBulkSMS,
  createContact,
  listContactGroups,
  getSingleSMS,
  getSMSBalance,
  getContactsGroupStats,
} = require('../controllers/sms.controller');
const { uploadFile } = require('../middlewares/upload.middleware');
const router = express.Router();

// Mount Routes
router.route('/single').post(sendSingleSMS).get(getSingleSMS);
router.route('/bulk').post(sendBulkSMS);
router.route('/bulk/contact').post(uploadFile.single('files'), createContact);
router.route('/group').get(listContactGroups);
router.route('/balance').get(getSMSBalance);
router.route('/group/stats').get(getContactsGroupStats);

module.exports = router;
