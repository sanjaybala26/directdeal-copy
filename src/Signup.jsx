import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios'; // Import axios for HTTP requests
import './signup.css'; // Import your CSS file for styling

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate function from useNavigate hook

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Perform your signup logic here (e.g., create user account)
      const user = { username, email, password };
      await axios.post('http://localhost:8080/api/signup', user);

      // Assuming signup is successful, navigate to '/login'
      navigate('/login');
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Ｓｉｇｎ  Ｕｐ</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Ｓｉｇｎ  Ｕｐ</button>
      </form>
    </div>
  );
};

export default SignupPage;
