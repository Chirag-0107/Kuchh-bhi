import React, { createContext, useState } from 'react';
import { googleLogout } from '@react-oauth/google';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  const logout = () => {
    googleLogout();
    setUserProfile(null);
  };

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};