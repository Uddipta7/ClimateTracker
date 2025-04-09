const axios = require('axios');
const ClimateData = require('../models/climateData.model');

const getClimateData = async (req, res) => {
    try {
        const { location } = req.query;
        const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: { q: location, appid: API_KEY, units: 'metric' },
        });

        res.json({ 
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            co2_levels: 'Data Unavailable',  // Fetch CO₂ data from another API
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch climate data' });
    }
};

const getHistoricalData = async (req, res) => {
    try {
        const data = await ClimateData.find().sort({ date: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch historical data' });
    }
};

const saveReport = async (req, res) => {
    try {
        const newReport = new ClimateData(req.body);
        await newReport.save();
        res.json({ message: 'Report saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save report' });
    }
};

module.exports = { getClimateData, getHistoricalData, saveReport };
