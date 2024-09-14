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

    getAllSales: async function () {
        try {
            return await db.Sale.findAll();
        } catch (error) {
            console.error('Error fetching all sales:', error);
            return [];
        }
    },

    getSaleById: async function (id) {
        try {
            return await db.Sale.findByPk(id);
        } catch (error) {
            console.error('Error fetching sale by ID:', error);
            return null;
        }
    },

    createSale: async function (saleData) {
        try {
            return await db.Sale.create(saleData);
        } catch (error) {
            console.error('Error creating sale:', error);
            throw error;
        }
    },

    updateSale: async function (id, saleData) {
        try {
            const sale = await db.Sale.findByPk(id);
            if (sale) {
                return await sale.update(saleData);
            }
            throw new Error('Sale not found');
        } catch (error) {
            console.error('Error updating sale:', error);
            throw error;
        }
    },

    deleteSale: async function (id) {
        try {
            const sale = await db.Sale.findByPk(id);
            if (sale) {
                return await sale.destroy();
            }
            throw new Error('Sale not found');
        } catch (error) {
            console.error('Error deleting sale:', error);
            throw error;
        }
    }
};

module.exports = saleService;
