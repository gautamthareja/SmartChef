import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className='navbar'>
      {isLoggedIn ? (
        <>
          <NavLink to="/">SmartChef Home</NavLink>
          <NavLink to="/pantry">Pantry Items</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/addRecipe">Add a Recipe</NavLink>
          <NavLink to="/">
            <button onClick={onLogout}>Logout</button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/">SmartChef Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
