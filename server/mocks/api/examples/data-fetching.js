'use strict';

module.exports = function(app) {
  const express = require('express');
  let apiExamplesDataFetchingRouter = express.Router();

  apiExamplesDataFetchingRouter.get('/', function(req, res) {
    const { floor, random } = Math;
    setTimeout(function() {
      if (floor(random() * 100) < 25) {
        res.status(404).send('Not Found');
      } else {
        res.json({
          message: `This is working (${floor(random() * 1000 + 1)})`
        });
      }
    }, floor(random() * 1000) + 400);
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/api-examples-data-fetching', require('body-parser').json());
  app.use('/api/examples/data-fetching', apiExamplesDataFetchingRouter);
};
