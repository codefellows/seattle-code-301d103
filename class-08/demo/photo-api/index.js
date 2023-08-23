'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT;
const UNSPLASH_CLIENT_ID = process.env.UNSPLASH_API_KEY;

const app = express();
app.use(cors());

app.get('/photo', async (request, response) => {

  let photoQuery = request.query.searchQuery;

  try {
    let unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_CLIENT_ID}&query=${photoQuery}`);
    response.json(unsplashResponse.data);
  } catch (e) {
    response.status(500).send('Ugh Oh');
  }
});

app.listen(PORT, () => {
  console.log('App is listening!');
});
