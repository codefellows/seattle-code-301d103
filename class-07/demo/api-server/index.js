'use strict';

const dotenv = require('dotenv');
// import express from 'express';
const express = require('express'); // built in function for code running in the Node runtime.
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT;

const app = express(); // create our express app, now we are ready to define some functionality.
app.use(cors()); // activates cross-origin-resource-sharing. allow other origins (besides localhost to make request to this code).

// tell express what code to run when specific HTTP events occur.
class Forecast {
  constructor(date, description) {
    this.data = date;
    this.description = description;
  }
}

app.get('/banana', (request, response) => {
  console.log(request.query); // query parameters
  if (!request.query.search) {
    response.status(400).send('Bad Request');
  } else {
    response.status(200).send('Thanks for searching');
  }
});

app.get('/weather', (request, response) => {
  console.log('Here are our query params', request.query);
  response.send('You have hit weather!');

  // if weatherData.find doesn't find a city => response.status(404)
});
// app.post()
// app.put()

app.listen(PORT, () => {
  console.log('App is listening!!');
});
