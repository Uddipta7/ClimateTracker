import axios from 'axios';

const CO2_API_URL = 'https://api.carbonintensity.org.uk/intensity';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = '50799b32a2e712ab34ef6eccde7ec9a1'; // Replace with your OpenWeatherMap API key

export const fetchClimateData = async (location) => {
    try {
        // Fetch CO₂ Levels
        const carbonResponse = await axios.get(CO2_API_URL);
        const co2Levels = carbonResponse.data.data[0].intensity.actual || 'N/A';

        // Fetch Real-Time Weather Data (Temperature & Humidity)
        const weatherResponse = await axios.get(WEATHER_API_URL, {
            params: {
                q: location,   // Pass city name (e.g., 'Bhubaneswar')
                appid: WEATHER_API_KEY,
                units: 'metric',  // Get temperature in Celsius
            },
        });

        const temperature = weatherResponse.data.main.temp || 'N/A';
        const humidity = weatherResponse.data.main.humidity || 'N/A';


        return {
            temperature: temperature.toFixed(1),
            humidity: humidity.toFixed(1),
            co2_levels: co2Levels,
        };
    } catch (error) {
        console.error('Error fetching climate data:', error);
        return {
            temperature: 'N/A',
            humidity: 'N/A',
            co2_levels: 'N/A',
  
        };
    }
};



