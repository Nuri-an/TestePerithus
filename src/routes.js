const express = require('express');

const routes = express.Router();  

const searchCitysController = require('./controllers/searchCitysController');

routes.get('/city', searchCitysController.index); //busca e retorna as cidades localizadas no estado informado

module.exports = routes;  
