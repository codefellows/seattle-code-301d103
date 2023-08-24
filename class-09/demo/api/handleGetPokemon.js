'use strict';

const axios = require('axios');

const handleGetPokemon = async (req, res, next) => {
  let name = req.query.name;

  if (!name) {
    next('no name found on request params'); // if everything is fine ,but there another thing the server has to do, call next with no arguments
  }

  try {
    let response = await axios.get(`https://pokeapi.co/api/v/pokemon/${name}`);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    next('Something broke in handle pokemon');
  }
};

// built in object for Node.js
module.exports = handleGetPokemon;
