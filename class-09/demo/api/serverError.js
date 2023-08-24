'use strict';

// express error handler have three params (the first will be and error)
const serverError = (err, req, res) => {
  console.log(err);
  res.status(500).send(err);
};

module.exports = serverError;
