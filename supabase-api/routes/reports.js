const express = require('express');
const router = express.Router();
const {
  getAllReports,
  createReport,
  updateReportStatus
} = require('../controllers/reportsController');

router.get('/', getAllReports);
router.post('/', createReport);
router.put('/:id/status', updateReportStatus);

module.exports = router;
