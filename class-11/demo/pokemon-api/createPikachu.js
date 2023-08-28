'use strict';

const mongoose = require('mongoose');
const PokemonModel = require('./PokemonModel.js');

// connect to our db:
mongoose.connect('mongodb://localhost:27017/pokemon-app');

// creating a new Mongoose Model entity.
let pikachu = new PokemonModel({
  name: 'Pikachu',
  pokeType: 'electric',
});


// whenever you perform a mongoDB operation, you will need to either: chain a .then() or await if you have define as async function.
pikachu.save().then(document => {
  console.log(document);

  PokemonModel.find({}).then(documents => {
    console.log(documents);
  });
}); // saves our pokemon that we created to our MongoDB that we are connected to.
