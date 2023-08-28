'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PokemonModel = require('./PokemonModel.js');

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();
app.use(cors());

// connect to the DB before any requests come through
mongoose.connect(MONGODB_URL);

app.get('/pokemon', async (req, res) => {

  try {
    let documents = await PokemonModel.find({});
    res.json(documents);
  } catch (e) {
    console.log('Something went wrong when finding all pokemon: ', e);
    res.status(500).send(e);
  }

});

app.listen(PORT, () => {
  console.log('App is running on PORT : ' + PORT);
});
