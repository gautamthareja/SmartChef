// routes/recipes.js
const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipes.jsx');

router.get('/', recipesController.getRecipes);
router.post('/', recipesController.addRecipe);
router.post('/byPantryItems', recipesController.getRecipesByPantryItems);

module.exports = router;
