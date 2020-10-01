const express = require('express');

const routes = express.Router();  

const searchCitysController = require('./controllers/searchCitysController');
const citiesController = require('./controllers/citiesController');

routes.get('/', citiesController.index); //busca e retorna todos os estados
routes.get('/city', searchCitysController.show); //busca e retorna as cidades localizadas no estado informado

module.exports = routes;  
