import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';
import AddRecipePage from './pages/AddRecipePage';

const AppRoutes = ({ isLoggedIn, onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <UserHomePage /> : <HomePage />} />
      <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
      <Route path="/signup" element={<SignupPage onLogin={onLogin} />} />
      {isLoggedIn && (
        <>
          <Route path="/pantry" element={<PantryPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/addRecipe" element={<AddRecipePage />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
