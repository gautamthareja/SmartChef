// models/recipes.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  mainIngredients: {
    type: [String],
    // required: true,
  },
  sideIngredients: {
    type: [String],
    default: [],
  },
  instructions: {
    type: [String],
    // required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
