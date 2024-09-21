import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
import logo from "../assets/don1.png";
import "./Navbar.css";
import ProfilePage from "../pages/profile/profile";

const Navbar = () => {
  const { isLoggedIn } = useContext(MyContext);
  const [user, setUser] = useState(null);
  const { userId } = useContext(MyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/users/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
        // Handle error (e.g., show a message to the user)
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, userId]);

  return (
    <nav className="navbar-m">
      <div className="nav-container">
        <Link to="/" className="logo-m">
          <img src={logo} alt="Logo" className="logo-img-m" />
        </Link>
        <div
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          aria-label="Mobile Menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`nav-links-m ${mobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          {isLoggedIn && user && (
            <li>
              <div className="profile-button-m" onClick={toggleDropdown}>
                <img src={user && user.imageUrl} alt="User Avatar" />
                {showDropdown && (
                  <div className="dropdown-content">
                    <ProfilePage />
                  </div>
                )}
              </div>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <button className="auth-button-m">
                <Link to="/signIn" onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
