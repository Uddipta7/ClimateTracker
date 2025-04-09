const express = require('express');
const { getClimateData, getHistoricalData, saveReport } = require('../controllers/climate.controller');

const router = express.Router();

router.get('/data', getClimateData);
router.get('/historical', getHistoricalData);
router.post('/report', saveReport);

module.exports = router;
