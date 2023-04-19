import React, { useState } from 'react';
import './auth.css';
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await AuthService.login(email, password);
    onLogin(result);
    navigate('/');
    if (result) {
    // Successfully logged in. Redirect or perform desired actions.
    } else {
    // Show error message or handle the failed login attempt.
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
