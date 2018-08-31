'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

var sportsController = require('./app/controllers/sports.ctrl.js');

const port = 8002;

app.options('*', cors());
app.use(cors());

app.use('/sport/api', [sportsController]);

app.use('/sport/api/*', function (req, res, next) {
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Sport back listening on ' + port);
});