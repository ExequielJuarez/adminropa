const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Asegúrate de que estas funciones existen en productController
router.get('/', productController.index);
router.get('/search', productController.search);
router.post('/add', productController.createSale);

module.exports = router;
