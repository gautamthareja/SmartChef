import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import AppRoutes from './routes';
import api from './services/api';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    api.defaults.headers.common['Authorization'] = null;
  };

  return (
    <Router>
      <Navbar isLoggedIn={Boolean(user)} onLogout={handleLogout} />
      <AppRoutes isLoggedIn={Boolean(user)} onLogin={handleLogin} />
    </Router>
  );
}

export default App;
