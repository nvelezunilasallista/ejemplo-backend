'use strict'

var mongoose = require('mongoose');
var application = require('./application');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/bdapflutter', () => {
    application.listen(8282, function () {
        console.log("El servidor web se ha iniciado correctamente");
    });
});
