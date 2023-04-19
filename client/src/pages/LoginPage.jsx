import React from 'react';
import LoginForm from '../auth/LoginForm';

function LoginPage({onLogin}) {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;
