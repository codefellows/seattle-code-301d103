'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const BookModel = require('./BookModel.js');
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

let book1 = BookModel({
  title: 'Harry Potter and the Sorcerers Stone',
  description: 'Harry goes to Hogwarts',
  status: 'Must Read'
});
let book2 = BookModel({
  title: 'Harry Potter Chamber of Secrets',
  description: 'Harry fights a basilisk',
  status: 'Must Read'
});
let book3 = BookModel({
  title: 'Harry Potter and the Prisoner of Azkaban',
  description: 'Harry meets his godfather',
  status: 'Must Read'
});

Promise.all([
  book1.save(),
  book2.save(),
  book3.save()
  ]).then(documents => {
  console.log(documents);
});
