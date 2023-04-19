import React from 'react';
import SignupForm from '../auth/SignupForm';

function SignupPage({onLogin}) {
  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onLogin={onLogin}/>
    </div>
  );
}

export default SignupPage;
