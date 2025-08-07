import React, { useState, useContext, useEffect, useRef } from 'react';
import "./kirti.css";
import { Link, useNavigate } from 'react-router-dom'; // ✅ fixed import
import Logo from "./assets/download.jpeg";
import { UserContext } from './UserContext';
import { IoMenu } from "react-icons/io5";

export default function Kirti() {
  const { userProfile, logout } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    closeMobileMenu();
  };

  const handleProfile = () => {
    navigate("/profile");
    closeMobileMenu();
  };

  return (
    <header>
      <Link id="comp" to="/" onClick={closeMobileMenu}>
        <img src={Logo} alt="logo" />
        AINWIK INFOTECH
      </Link>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <IoMenu size={28} />
      </div>

      <nav className={mobileMenuOpen ? "mobile-active" : ""}>
        <ul>
          <li className="kirti-list"><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li className="kirti-list"><Link to="/courses" onClick={closeMobileMenu}>All Courses</Link></li>
          <li className="kirti-list"><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li className="kirti-list"><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>

          {/* Desktop Profile Dropdown */}
          {userProfile && (
            <li className="kirti-list profile-dropdown desktop-profile" ref={dropdownRef}>
              <img
                src={userProfile.image}
                alt="User"
                className="profile-img desktop-profile"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={handleProfile}>👤 View Profile</li>
                  <li onClick={handleLogout}>🚪 Logout</li>
                </ul>
              )}
            </li>
          )}

          {/* Mobile Profile Image */}
          {userProfile && (
            <li className="kirti-list profile-list-mobile">
              <img
                src={userProfile.image}
                alt="Profile"
                className="profile-img"
                onClick={handleProfile}
              />
            </li>
          )}

          {/* Start Learning Button (when not logged in) */}
          {!userProfile && (
            <li className="kirti-list">
              <Link to="/login" id="eff" onClick={closeMobileMenu}>Start Learning</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
