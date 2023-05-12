'use strict'

var express = require('express');
var contactscontroller = require('../controllers/contactscontroller');

var application = express.Router();

application.post('/contact', contactscontroller.crearContacto);

application.get('/contact', contactscontroller.consultarContactos);

module.exports = application;