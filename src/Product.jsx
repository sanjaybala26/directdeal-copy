import React, { useState } from 'react';
import './Profile.css'; // Import Profile styles

const Profile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <div className="profile-icon" onClick={toggleProfile}>
      </div>
      <div className={`profile-sidebar ${showProfile ? 'open' : ''}`}>
        <div className="profile-content">
          <button className="close-button" onClick={toggleProfile}>X</button>
          <img src="user-photo-url" alt="" className="profile-photo" />
          <p>Username</p>
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
