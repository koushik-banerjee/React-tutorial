import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeForm, setActiveForm] = useState('login'); // Toggle between 'login' and 'signup'
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleFormSwitch = (form) => {
    setActiveForm(form);
    setErrors({});
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(loginData.email)) newErrors.email = 'Email is invalid';
    if (!loginData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(signupData.email)) newErrors.email = 'Email is invalid';
    if (signupData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    if (signupData.password !== signupData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length === 0) {
      console.log('Login successful:', loginData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateSignup();
    if (Object.keys(newErrors).length === 0) {
      console.log('Signup successful:', signupData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <button
          className={activeForm === 'login' ? 'active' : ''}
          onClick={() => handleFormSwitch('login')}
        >
          Login
        </button>
        <button
          className={activeForm === 'signup' ? 'active' : ''}
          onClick={() => handleFormSwitch('signup')}
        >
          Signup
        </button>
      </div>

      <div className={`form-wrapper ${activeForm === 'signup' ? 'signup-active' : ''}`}>
        <form className={activeForm === 'login' ? 'active' : ''} onSubmit={handleLoginSubmit}>
          <h2>Login Form</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Email Address"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <p className="forgot-password">Forgot password?</p>
          <button type="submit">Login</button>
          <p>Not a member? <span onClick={() => handleFormSwitch('signup')} className="switch-link">Signup now</span></p>
        </form>

        <form className={activeForm === 'signup' ? 'active' : ''} onSubmit={handleSignupSubmit}>
          <h2>Signup Form</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              placeholder="Email Address"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              placeholder="Password"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>

          <button  type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default App;
