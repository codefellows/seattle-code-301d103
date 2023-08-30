'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PokemonModel = require('./models/pokemon.js');

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();
app.use(cors());
app.use(express.json()); // attaches JSON from the HTTP request, to the request object created by express.

mongoose.connect(MONGODB_URL);

// READ all pokemon object from the DB
app.get('/pokemon', async (req, res) => {
  let pokemons = await PokemonModel.find({});
  res.json(pokemons);
});

// READ a single pokemon object in the DB
app.get('/pokemon/:pokemonName', (req, res) => {
  res.send('You have hit the /pokemon/POKEMONNAME route, here is the name: ' + req.params.pokemonName);
});

// C - CREATE a single pokemon object in the DB
app.post('/pokemon', async (req, res) => {
  // use our ORM to create a new Pokemon Object.
  console.log('OUR REQUEST BODY: ', req.body); // any info express thinks is relevant to the request.
  let { name, type, abilities, defensePoints, attackPoints } = req.body;

  if (!name || !type || !defensePoints || ! attackPoints) {
    res.status(400).send('Please send pokemon object as JSON');
    return;
  }

  let pokemon = new PokemonModel({ name, type, abilities, defensePoints, attackPoints });
  let document = await pokemon.save();

  console.log('NEW POKEMON CREATED!', document);
  res.json(document);
});

// UPDATE - replace a whole object in our DB with a new object
app.put('/pokemon/:pokemonId', async (req, res) => {
  // we need the id
  let id = req.params.pokemonId;

  try {
    await PokemonModel.replaceOne({ _id: id}, req.body); // req.body - the express object for all data.
    let newPokemon = await PokemonModel.findOne({ _id: id });
    res.status(200).json(newPokemon);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// PARTIAL UPDATE - replace pieces of an object in the DB
app.patch('/pokemon/:pokemonId', async (req, res) => {
  let id = req.params.pokemonId;
  try {
    let pokemon = await PokemonModel.findOne({ _id: id });
    for (let property in req.body) {
      pokemon[property] = req.body[property];
    }
    let newPokemon = await pokemon.save();
    res.status(200).json(newPokemon);
  } catch(e) {
    res.status(400).send(e);
  }
});


// DELETE remove a single pokemon object -> we need the id of the pokemon
app.delete('/pokemon/:pokemonId', async (req, res) => {
  if (!req.params.pokemonId) {
    req.status(404).send('Please provide a valid pokemon Id');
    return;
  }

  console.log('deleting pokemon at id: ' + req.params.pokemonId);
  let result = await PokemonModel.findByIdAndDelete(req.params.pokemonId);
  console.log(result);
  res.status(204).send('SUCCESS');
});


app.listen(PORT, () => {
  console.log('APP IS LISTENING!!');
});
