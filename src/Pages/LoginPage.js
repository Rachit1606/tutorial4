import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', {
        username: email,
        password: password
      });
      if (response.data.message === 'Login success!') {
        navigate('/profile');
      } else {
        setError('Wrong email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Something went wrong. We are looking into the issue.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">Login Page</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
