const express = require('express');

const routes = express.Router();  

const searchCitiesController = require('./controllers/searchCitiesController');
const citiesController = require('./controllers/citiesController');

routes.get('/', citiesController.index); //busca e retorna todos os estados
routes.get('/city', searchCitiesController.show); //busca e retorna as cidades localizadas no estado informado

module.exports = routes;  
