import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate =useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (username === 'demo@coralmango.com' && password === 'demo123') {
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Invalid Credentials!');
    }
  };
useEffect(() => {
  if (isLoggedIn) {
    navigate("/DataTable")
  }
}, [isLoggedIn])

  

  return (
    <div className='formdata'>
        <div className='formbox'>
      <form onSubmit={handleSubmit}>
        <div className='formlable'>
          <label  htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='formlable'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;