'use strict';

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    // enum: ['MUST_READ', 'READ_WHEN_YOU_HAVE_TIME', 'SKIP'],
    required: true,
  },
});

const BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;
