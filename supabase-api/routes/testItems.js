const express = require('express');
const router = express.Router();
const {
  getAllTestItems,
  createTestItem
} = require('../controllers/testItemsController');

router.get('/', getAllTestItems);
router.post('/', createTestItem);

module.exports = router;

