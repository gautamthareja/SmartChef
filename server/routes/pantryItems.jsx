const authenticateJWT = require('../middlewares/middleware.jsx');
const express = require('express');
const router = express.Router();
const { getPantryItems, addPantryItem, deletePantryItem } = require('../controllers/pantryItems.jsx');

router.get('/', authenticateJWT, getPantryItems);
router.post('/', authenticateJWT, addPantryItem);
router.delete('/:id', authenticateJWT, deletePantryItem);

module.exports = router;
