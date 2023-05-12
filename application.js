'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var routescontacts = require('./routes/contacts');

var application = express();

application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

application.use('/api', routescontacts);

module.exports = application;
