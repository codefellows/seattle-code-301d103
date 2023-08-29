'use strict';

const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  defensePoints: {
    type: Number,
    required: true,
  },
  attackPoints: {
    type: Number,
    required: true,
  },
  abilities: {
    type: Array,
  },
});

module.exports = mongoose.model('pokemon', pokemonSchema);
