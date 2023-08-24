'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3001;
const W_API_KEY=process.env.WEATHER_API_KEY;

class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

app.use(cors());

app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?key=${W_API_KEY}&lat=${lat}&lon=${lon}`);

    const data = response.data.data;

    const forecastItems = [];

    for (let i = 0; i < data.length; i++) {
      const date = data[i].datetime;
      const description = data[i].weather.description;
      const forecast = new Forecast(date, description);
      forecastItems.push(forecast);

      console.log(`Date: ${date}, Description: ${description}`);
    }

    res.json(forecastItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error. Dont worry its not you.'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
