const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- Model API URLs ---
const ADVANCED_ML_API_URL = 'https://agropals-suggester-2-231842036638.asia-south1.run.app';
const SIMPLE_CROP_API_URL = 'https://crop-recommender-231842036638.asia-south1.run.app';

// --- API Endpoints ---

// Endpoint for the ADVANCED model
app.post('/api/v1/get-advisory', async (req, res) => {
  try {
    console.log('➡️ Forwarding request to ADVANCED ML API...');
    const response = await axios.post(`${ADVANCED_ML_API_URL}/api/v1/predict/all`, req.body);
    console.log('✅ Success from ADVANCED ML API.');
    res.status(200).json(response.data);
  } catch (error) {
    console.error("❌ Error with Advanced ML API!", error.message);
    res.status(500).json({ message: "Error from advanced prediction service." });
  }
});

// Endpoint for the SIMPLE model
app.post('/api/v1/recommend-crop', async (req, res) => {
    try {
        console.log('➡️ Forwarding request to SIMPLE CROP API...');
        const response = await axios.post(`${SIMPLE_CROP_API_URL}/predict`, req.body);
        console.log('✅ Success from SIMPLE CROP API.');
        res.status(200).json(response.data);
    } catch (error) {
        console.error("❌ Error with Simple Crop API!", error.message);
        res.status(500).json({ message: "Error from simple prediction service." });
    }
});

// Endpoint for dashboard data
app.get('/api/dashboard', (req, res) => {
  const leaderboard = [{ name: "Suresh K.", yield: 1500 }, { name: "Priya M.", yield: 1450 }];
  const advisories = { en: "Weather alert: Expect light showers this afternoon." };
  res.status(200).json({ leaderboard, advisories });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server is running on http://localhost:${PORT}`);
});