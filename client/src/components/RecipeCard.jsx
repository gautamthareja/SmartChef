import React from "react";
import "../../public/default.jpg";
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card"> 
      <h2>{recipe.title}</h2>
      <img src="default.jpg" alt={recipe.title} />
      <p>Main Ingredients: {recipe.mainIngredients.join(", ")}</p>
      <p>Side Ingredients: {recipe.sideIngredients.join(", ")}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
}

export default RecipeCard;
