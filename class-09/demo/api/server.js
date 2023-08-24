'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleGetPokemon = require('./handleGetPokemon.js');
const serverError = require('./serverError.js');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/pokemon', handleGetPokemon);
// app.get('/weather', handleWeather);

// apply a generic to all routes, define a handler at the bottom of the server file.
app.use(serverError);

app.listen(PORT, () => {
  console.log('Server is running on PORT ::: ' + PORT);
});
