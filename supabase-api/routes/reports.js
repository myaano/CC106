const express = require('express');
const router = express.Router();
const {
  getAllReports,
  createReport,
} = require('../controllers/reportsController');

router.get('/', getAllReports);
router.post('/', createReport);


module.exports = router;
