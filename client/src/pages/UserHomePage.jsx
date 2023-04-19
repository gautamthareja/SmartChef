import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Welcome to Your Pantry App</h1>
      <Link to="/pantry">
        <button>Pantry Items</button>
      </Link>
      <Link to="/recipes">
        <button>Recipes</button>
      </Link>
      <Link to="/addRecipe">
        <button>Add a Recipe</button>
      </Link>
    </div>
  );
};

export default HomePage;
