const express = require('express');
const router = express.Router();
const statusHistoryController = require('../controllers/statusHistoryController');

router.get('/', statusHistoryController.getAllStatusHistory);
router.post('/', statusHistoryController.createStatusHistory);

module.exports = router;
