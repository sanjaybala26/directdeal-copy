import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const goOut = () => {
    localStorage.removeItem('username'); // Remove username from localStorage on logout
    navigate('/');
  };

  return (
    <div>
      {!showProfile && (
        <button className="profile-button" onClick={toggleProfile}>Profile</button>
      )}
      <div className={`profile-sidebar ${showProfile ? 'open' : ''}`}>
        <div className="profile-content">
          <button className="close-button" onClick={toggleProfile}>X</button>
          <img src="data:image/png;base64,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  " alt="" className="profile-photo" />
          <p>{username}</p>
          <button>Settings</button>
          <button onClick={goOut}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
