const axios = require('axios');
        
module.exports = {
    async index(req, res) {

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`).then(response => { //acessa a api de localidades do IBGE que fornece as UFs
            const retorno = response.data; //recebe o retorno da api

            res.json(retorno); //retorna ao usuário as UFs
        });

    }
}