const saleService = require('../data/saleService');

const productController = {
    // Esta función debe estar definida para manejar la ruta '/'
    index: (req, res) => {
        res.render('index'); // Asegúrate de que `index.ejs` exista en `views`
    },

    // Esta función busca ventas por código
    search: async (req, res) => {
        const codigo = req.query.search; // Asume que el parámetro de búsqueda se llama 'search'

        try {
            const sales = await saleService.getSaleByCode(codigo);

            if (sales.length > 0) {
                res.render('searchResults', { sales: sales }); // Renderiza la vista de resultados
            } else {
                res.render('searchResults', { sales: [] });
            }
        } catch (error) {
            console.error('Error fetching sales:', error);
            res.status(500).send('Error fetching sales');
        }
    },

    // Esta función muestra todos los productos
    showProducts: async (req, res) => {
        try {
            const sales = await saleService.getAllSales();
            res.render('product', { sales: sales });
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).send('Error fetching products');
        }
    },

    // Esta función muestra el formulario de edición
    editProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const sale = await saleService.getSaleById(id);
            res.render('editProduct', { sale: sale });
        } catch (error) {
            console.error('Error fetching sale for editing:', error);
            res.status(500).send('Error fetching sale for editing');
        }
    },

    // Esta función actualiza los datos del producto
    updateProduct: async (req, res) => {
        const id = req.params.id;
        const saleData = req.body;
        try {
            await saleService.updateSale(id, saleData);
            res.redirect('/products');
        } catch (error) {
            console.error('Error updating sale:', error);
            res.status(500).send('Error updating sale');
        }
    },

    // Esta función elimina un producto
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            await saleService.deleteSale(id);
            res.redirect('/products');
        } catch (error) {
            console.error('Error deleting sale:', error);
            res.status(500).send('Error deleting sale');
        }
    },

    // Esta función crea una nueva venta
    createSale: async (req, res) => {
        const saleData = {
            codigo: req.body.codigo,
            product_name: req.body.producto,
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
