'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const BookModel = require('./BookModel.js');

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();
app.use(cors());

mongoose.connect(MONGODB_URL);

// function sortBooks(bookObjects) {

// }

app.get('/books', async (request, response) => {
  try {
    let documents = await BookModel.find({});
    response.json(documents);
  } catch (e) {
    console.log('something went wrong when finding all books', e);
    response.status(500).send(e);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
