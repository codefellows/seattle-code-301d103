'use strict';

const dotenv = require('dotenv');
// import express from express
const express = require('express');
const weatherData = require('./data/weather.json');
const cors = require('cors');


class Forecast {
  constructor(date, description){
    this.date = date;
    this.description = description;
  }
}

dotenv.config();
const PORT = process.env.PORT;
// creates the express app, now ready to define functionality
const app = express();
// activates cross-origin-resource-sharing. Allows other origins (besides localhost) to make request to this code.
app.use(cors());
// a basic routes
app.get('/weather', (req, res) => {
//   console.log(req);
  //extracting lat, long, and searchQuery from json file
  const {lat, lon, searchQuery} = req.query;
  // add error handling maybe??
  if (!lat ||!lon || !searchQuery){
    return res.status(400).json({error: 'Missing parameters'});
  }
  //res.send('Hello, express!');

  // fetching weather data
  const dayOfWeather = weatherData.find(item => (
    // checks if latitude of current item in weatherdata array is equal to the provided lat value.
    // The parseFloat function is used to convert the string 'lat' value to a floating point number for an accurate comparison
    (item.lat === parseFloat(lat) &&
    //checks if the longitude of the current item matches the provided lon value after converting it to a floating-point number.
    item.lon === parseFloat(lon)) ||
    // compares lowercase version of the searchQuery from current item to the lowercase version of the provided searchQuery.
    //This ensures the comparisons are case-sensitive.
    item.city_name.toLowerCase() === searchQuery.toLowerCase()
  ));
  // error handling maybe??'
  if (!dayOfWeather) {
    return res.status(404).json({ error: 'Weather data not found' });
  }
  // loop the data[]
  const dailyForecast = dayOfWeather.data.map((day) => {
    const forecastDate = day.datetime;
    const forecastDescription = day.weather.description;
    // console.log(forecastDate, forecastDescription);
    return new Forecast(forecastDate, forecastDescription);

  });
  res.json(dailyForecast);
});
// starting the server

app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});


// to run port in thunder bolt... url: http://localhost:3001
