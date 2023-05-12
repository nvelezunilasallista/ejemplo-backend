'use strict'

var Contactos = require('../models/contactos');

function crearContacto(req, resp){

    var nuevoContacto = new Contactos();

    var parametros = req.body;

    nuevoContacto.nombre = parametros.nombre;
    nuevoContacto.apellidos = parametros.apellidos;
    nuevoContacto.email = parametros.email;
    nuevoContacto.telefono = parametros.telefono;

    nuevoContacto.save(
        (err, contactoGuardado) => {
            if(err){
                console.log(err);
                resp.status(500).send({message: "No se pudo crear el contacto"});
            }
            else{
                resp.status(200).send({contactCreated: contactoGuardado});
            }
    });
}

function consultarContactos(req, resp){
    Contactos.find({}, (err, contactosEncontrados) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({contactList: contactosEncontrados});
        }
    });
}

module.exports = {
    crearContacto,
    consultarContactos
};