const express = require('express');
const router = express.Router();

// ❌ بدل multerConfig المحلي
const upload = require('../middleware/uploadCloudinary');

const checkAdminPassword = require('../middleware/authMiddleware');

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Admin routes (Cloudinary upload)
router.post(
  '/',
  checkAdminPassword,
  upload.array('images', 50),
  createProduct
);

router.put(
  '/:id',
  checkAdminPassword,
  upload.array('images', 50),
  updateProduct
);

router.delete('/:id', checkAdminPassword, deleteProduct);

module.exports = router;