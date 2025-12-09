const express = require('express');
const router = express.Router();
const reportTypeController = require('../controllers/reportTypeController');

router.get('/', reportTypeController.getAllReportTypes);
router.post('/', reportTypeController.createReportType);

module.exports = router;
