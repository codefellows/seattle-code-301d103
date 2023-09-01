'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authorize = require('./auth/authorize.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(authorize); // apply authentication token checking.

app.get('/pokemon', (req, res) => {
  console.log(req.user);
  res.send('You made it');
});

app.listen(PORT, () => {
  console.log('App is listening on : '+ PORT);
});
