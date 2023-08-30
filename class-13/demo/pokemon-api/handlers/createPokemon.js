'use strict';

const PokemonModel = require('../models/pokemon.js');

async function createPokemon(req, res) {
  // use our ORM to create a new Pokemon Object.
  console.log('OUR REQUEST BODY: ', req.body); // any info express thinks is relevant to the request.
  let { name, type, abilities, defensePoints, attackPoints } = req.body;

  if (!name || !type || !defensePoints || !attackPoints) {
    res.status(400).send('Please send pokemon object as JSON');
    return;
  }

  let pokemonObjectLiteral = { name, type, abilities, defensePoints, attackPoints };

  let pokemon = new PokemonModel(pokemonObjectLiteral);
  let document = await pokemon.save();

  console.log('NEW POKEMON CREATED!', document);
  res.json(document);
}

module.exports = createPokemon;
