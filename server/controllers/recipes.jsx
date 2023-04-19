// controllers/recipes.js
const Recipe = require('../models/Recipe.jsx');

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
};

exports.addRecipe = async (req, res) => {
  try {
    const { title, mainIngredients, sideIngredients, instructions, imageUrl } = req.body;
    const mainIngredientsArray = JSON.parse(mainIngredients);
    const sideIngredientsArray = JSON.parse(sideIngredients);
    console.log(mainIngredients);
    const recipe = new Recipe({ title, mainIngredients:mainIngredientsArray, sideIngredients:sideIngredientsArray, instructions, imageUrl, });
    await recipe.save();
    // // await User.findByIdAndUpdate(req.user._id, { $push: { recipes: recipe._id } });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error adding recipe', error });
  }
};

exports.getRecipesByPantryItems = async (req, res) => {
  try {
    const { pantryItems } = req.body;
    const recipes = await Recipe.find();
    const filteredRecipes = recipes.filter(recipe => {
      const mainIngredients = recipe.mainIngredients;
      return mainIngredients.every(ingredient => pantryItems.includes(ingredient));
    });

    res.status(200).json(filteredRecipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes by pantry items' });
  }
};
