// src/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation
    if (!name || !age) {
      setError('Both fields are required');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Handle successful registration (e.g., send data to server)
    console.log('Registration Successful:', { name, age });

    // Clear form fields
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
