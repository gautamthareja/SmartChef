import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import "./RecipesPage.css";
import api from "../services/api";

function filterRecipesByPantryItems(recipes, pantryItems) {
  return recipes.filter(recipe => {
    const mainIngredients = recipe.mainIngredients;
    const pantryItemNames = pantryItems.map(item => item.name);
    return mainIngredients.every(ingredient => pantryItemNames.includes(ingredient));
  });
}


function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [recipesResponse, pantryItemsResponse] = await Promise.all([
        api.get("/recipes"),
        api.get("/pantryItems"),
      ]);
  
      setRecipes(recipesResponse.data);
      setPantryItems(pantryItemsResponse.data);
    }
  
    fetchData();
  }, []);

  const filteredRecipes = filterRecipesByPantryItems(recipes, pantryItems);

  return (
    <div>
      <h1>Recipes</h1>
      {filteredRecipes.length > 0 ? (
        <p>These recipes can be made with the main ingredients in your pantry:</p>
      ) : (
        <p>No recipes found based on the main ingredients in your pantry.</p>
      )}
      <div className="recipe-cards">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
      <div className="add-more-recipes">
        <Link to="/addRecipe">
          <button className="add-more-recipes-btn">Add more recipes!</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipesPage;
