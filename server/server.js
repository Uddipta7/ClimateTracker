require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const climateRoutes = require('./routes/climate.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/climate', climateRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('🔥 MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
