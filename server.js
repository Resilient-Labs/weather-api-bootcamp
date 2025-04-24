const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5502;

app.use(cors());
app.use(express.static('public')); 


app.get('/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.APIKEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching weather:', error);
    res.status(500).json({ error: 'Failed to get weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});