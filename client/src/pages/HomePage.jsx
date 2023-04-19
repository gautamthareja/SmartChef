import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Welcome to SmartChef!</h1>
      <h2>-Your Smart Pantry-</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default HomePage;
