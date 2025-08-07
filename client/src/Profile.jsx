// src/Profile.jsx
import React, { useContext, useEffect } from 'react';
import './profile.css';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Profile() {
  const { userProfile, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProfile) {
      navigate('/login');
    }
  }, [userProfile, navigate]);

  if (!userProfile) return null;

  return (
    <div id="main-body">
      <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-card-centered updated-layout">
          <div className="profile-left">
            <img
              src={userProfile.image || "/default-user.png"}
              alt="Profile"
              className="profile-img-centered"
            />
          </div>
          <div className="profile-right">
            <div className="info-box">
              <label>Name:</label>
              <p>{userProfile.name}</p>
            </div>
            <div className="info-box">
              <label>Email:</label>
              <p>{userProfile.email}</p>
            </div>
            <button className="logout-btn" onClick={logout}>
              <LogOut size={18} style={{ marginRight: '8px' }} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}