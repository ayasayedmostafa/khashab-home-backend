const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const checkAdminPassword = require('../middleware/authMiddleware');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public routes - anyone can view products
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected routes - admin password required
router.post('/', checkAdminPassword, upload.array('images', 50), createProduct);
router.put('/:id', checkAdminPassword, upload.array('images', 50), updateProduct);
router.delete('/:id', checkAdminPassword, deleteProduct);

module.exports = router;