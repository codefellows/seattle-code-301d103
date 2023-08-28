'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const PokemonModel = require('./PokemonModel.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

let charizard = new PokemonModel({
  name: 'Charizard',
  pokeType: 'fire'
});
let squirtle = new PokemonModel({
  name: 'Squirtle',
  pokeType: 'water'
});
let bulbasaur = new PokemonModel({
  name: 'Bulbasaur',
  pokeType: 'grass'
});

Promise.all([
  charizard.save(),
  squirtle.save(),
  bulbasaur.save()
]).then(documents => {
  console.log(documents);
});
