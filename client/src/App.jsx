import React from 'react';
import Kirti from './kirti.jsx';
import Fauzan from './fauzan.jsx';
import Kishan from './kishan.jsx';
import Login from './Login.jsx';
import Courses from './courses.jsx';
import RouterPage from './RouterPage.jsx';
import Ainwik from './Ainwik.jsx';
import Aboutus from './aboutus.jsx';
import Err from './Err.jsx';
import Contacts from './Contacts.jsx';
import Profile from './profile.jsx';
import Signin from './signinfromgoogle.jsx';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // ✅ FIXED import
import { UserProvider } from './UserContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Kirti />
        <Routes>
          <Route path="/" element={<RouterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} /> {/* ✅ Add Signin route */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/ainwik" element={<Ainwik />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Err />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
