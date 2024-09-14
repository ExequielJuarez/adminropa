const db = require('../model/database/models');

const saleService = {
    getSaleByCode: async function (codigo) {
        try {
            return await db.Sale.findAll({
                where: { codigo: codigo }
            });
        } catch (error) {
            console.error('Error fetching sales:', error);
            return [];
        }
    },

    createSale: async function (saleData) {
        try {
            return await db.Sale.create(saleData);
        } catch (error) {
            console.error('Error creating sale:', error);
            throw error;
        }
    }
};

module.exports = saleService;
