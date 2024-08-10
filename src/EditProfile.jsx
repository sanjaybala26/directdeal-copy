// src/EditProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const username = localStorage.getItem('username'); // Assuming username is stored in localStorage
        const response = await axios.get(`http://localhost:8080/api/users/me?username=${username}`);
        setUserDetails(response.data);
      } catch (error) {
        setError('Error fetching user details.');
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const username = localStorage.getItem('username');
      await axios.put(`http://localhost:8080/api/users/me?username=${username}`, userDetails);
      alert('Profile updated successfully');
    } catch (error) {
      setError('Error updating profile.');
      console.error('Error updating profile:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const username = localStorage.getItem('username');
      await axios.delete(`http://localhost:8080/api/users/me?username=${username}`);
      localStorage.removeItem('username'); // Remove username from localStorage
      navigate('/');
    } catch (error) {
      setError('Error deleting account.');
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleUpdate}>Update Profile</button>
      <button onClick={handleDelete} className="delete-button">Delete Account</button>
    </div>
  );
};

export default EditProfile;
