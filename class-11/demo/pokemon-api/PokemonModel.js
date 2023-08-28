'use strict';

const mongoose = require('mongoose');

// Create our Schema (Data Modeling)
const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pokeType: {
    type: String,
    required: true,
  },
});

const PokemonModel = mongoose.model('pokemon', PokemonSchema);

module.exports = PokemonModel;
