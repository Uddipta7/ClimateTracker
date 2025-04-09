const mongoose = require('mongoose');

const ClimateDataSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    co2_levels: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClimateData', ClimateDataSchema);
