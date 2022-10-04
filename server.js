//nodemon instalado para que se refresque el servidor 
const express = require('express');

const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
const dotenv = require('dotenv').config()

app.set('view engine', 'ejs');
const uri = process.env.URI
const port = process.env.PORT

mongoose.connect(uri);

const alumnosSchema = {
    _id: Number,
    Nombre: String,
    Apellido: String,
    Edad: Number,
    Tipo: Boolean
}

const Alumnos = mongoose.model('alumnos', alumnosSchema);

app.get('/', (req, res) => {
    Alumnos.find({}, function(err, alumnos) {
        res.render('index', {
            listaAlumnos: alumnos
        })
    })
})

app.listen(port, function() {
    console.log('El servidor está corriendo en el servidor', port);
})