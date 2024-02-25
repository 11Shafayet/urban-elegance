const express = require('express');
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productsController');

const router = express.Router();

module.exports = function (productsCollection, userCollection) {
  router.get('/', getAllProducts(productsCollection, userCollection));
  router.post('/', addProduct(productsCollection));
  router.put('/', updateProduct(productsCollection));
  router.delete('/', deleteProduct(productsCollection));

  return router;
};
