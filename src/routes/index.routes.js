const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Asegúrate de que estas funciones existen en productController
router.get('/', productController.index);
router.get('/search', productController.search);
router.get('/products', productController.showProducts);
router.get('/products/:id/edit', productController.editProduct);
router.post('/products/:id/update', productController.updateProduct);
router.post('/products/:id/delete', productController.deleteProduct);
router.post('/add', productController.createSale);

module.exports = router;
