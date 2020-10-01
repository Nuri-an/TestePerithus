const axios = require('axios');
        
module.exports = {
    async index(req, res) {

        const { busca = ''} = req.query; //se existir, recebe a UF fornecida pelo usuário, ou recebe vazio

        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${busca}/municipios`).then(response => { //acessa a api de localidades do IBGE que fornece os municipios por UF
            const retorno = response.data; //recebe o retorno da api

            res.json(retorno); //retorna ao usuário esse retorno, os municípios da UF fornecida ou vazio
        });

    }
}