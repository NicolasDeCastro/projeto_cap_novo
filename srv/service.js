const cds = require('@sap/cds');
const { query } = require('express');
    
    module.exports = async (srv) => {
        /*conexão serviço literalmente*/
        const sTation = await cds.connect.to('API_SALES_QUOTATION_SRV');


        /*quando eu "ler"meu A_sales_quotation , eu faço a "função*/
        srv.on('READ', 'A_Sales_Quotation' ,(req) => {
         const data =  sTation.transaction(req).send({
                query : req.query,
                headers: {
                    apiKey:'SrVbnjeMtX9Zqqj6Gs4lsRxQywSGAoJm'
                }
            })
            return data;

    })

    





}



