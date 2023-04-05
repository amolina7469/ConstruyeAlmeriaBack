const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

//Creación de la aplicación de Express
const app = express();

//Configuración de mi app de Express
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Gestión de rutas
app.use('/api', require('./routes/api'));

module.exports = app;
