// productController.js
const saleService = require('../data/saleService');

const productController = {
    index: (req, res) => {
        res.render('index');
    },

    search: async (req, res) => {
        const codigo = req.query.search;

        try {
            const sales = await saleService.getSaleByCode(codigo);

            if (sales.length > 0) {
                res.render('searchResults', { sales: sales });
            } else {
                res.render('searchResults', { sales: [] });
            }
        } catch (error) {
            console.error('Error fetching sales:', error);
            res.status(500).send('Error fetching sales');
        }
    },

    createSale: async (req, res) => {
        const saleData = {
            codigo: req.body.codigo,
            product_name: req.body.producto, // Asegúrate de que el nombre del campo sea 'product_name'
            price: req.body.precio,
            cash: req.body.efectivo,
            debit: req.body.debito
        };

        try {
            await saleService.createSale(saleData);
            res.redirect('/');
        } catch (error) {
            console.error('Error creating sale:', error);
            res.status(500).send('Error creating sale');
        }
    }
};

module.exports = productController;
