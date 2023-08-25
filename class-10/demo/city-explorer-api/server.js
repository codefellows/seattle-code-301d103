'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;
const MOVIEDB_API_KEY = process.env.MOVIEDB_API_KEY;
// const weatherData = require('./assets/weather.json');

app.use(cors());

const cache = {
  movies: {},
  weather: {},
};

class Movie {
  constructor(movieValue) {
    this.title = movieValue.title;
    this.overview = movieValue.overview;
    this.average_votes = movieValue.vote_average;
    this.total_votes = movieValue.vote_count;
    this.image_url = movieValue.poster_path;
    this.popularity = movieValue.popularity;
    this.release_on = movieValue.release_date;
  }
}

app.get('/movies', async (req, res) => {
  let { searchQuery } = req.query;
  let movies = null;

  if (cache.movies[searchQuery]) {
    // found a response, dont send a new request
    console.log('CACHE HIT! Sending cached data', cache);
    // let currentTime = Date.now();
    // currentTime - cache.movies[searchQuery].timeStamp + 30000;
    let response = cache.movies[searchQuery];
    movies = response.data.results.map(movieValues => new Movie(movieValues));
  } else {
    console.log("CACHE MISS! request fresh API data", cache);
    // no value found in the cache, go ahead a request fresh data:
    //make another request to movieDB AND store the response in our cache
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${MOVIEDB_API_KEY}`);
    // const timestamp = Date.now();
    // response.timeStamp = timestamp;
    cache.movies[searchQuery] = response;
    movies = response.data.results.map(movieValues => new Movie(movieValues));
  }

  res.json(movies);
});



app.get('/weather', (req, res) => {
  let { lat, lon } = req.query;
  res.send('FIND WEATHER FOR:  ' + lat + ' ' + lon);
});

app.listen(PORT, () => {
  console.log('App is listening on PORT :: ' + PORT);
});
