import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaArrowLeft, FaUser, FaShoppingCart, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import logo from './images/logo.png';
import { useCookies } from 'react-cookie';

function AppNavbar({ toggleMenu, setSearchQuery }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [cookies, , removeCookie] = useCookies(['user']);
  const [user, setUser] = useState(null);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  const searchIconRef = useRef(null);
  const searchFormRef = useRef(null);

  const showBackButton = location.pathname !== '/';

  useEffect(() => {
    setUser(cookies.user);
  }, [cookies]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate('/search');
  };

  const handleLogout = () => {
    removeCookie('user');
    setUser(null);
    navigate('/login-signup');
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleClickOutside = (event) => {
    if (
      searchIconRef.current &&
      !searchIconRef.current.contains(event.target) &&
      searchFormRef.current &&
      !searchFormRef.current.contains(event.target)
    ) {
      setIsSearchBarVisible(false);
    }
  };

  useEffect(() => {
    if (!isSearchBarVisible) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isSearchBarVisible]);

  return (
    <div className="navbar-container">
      <Navbar expand="lg">
        <div className="navbar-brand-container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form
            ref={searchFormRef}
            className={`mx-auto searchbarcontainer ${isSearchBarVisible ? 'visible' : ''}`}
            inline
            onSubmit={handleSearchSubmit}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 searchbar"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit" className="search-button">Search</Button>
          </Form>
          <Nav className="ml-auto d-none d-lg-flex">
            {user ? (
              <>
                <Nav.Link as={Link} to="/account" className="user-info">
                  <FaUser className="user-icon" /> {user}
                </Nav.Link>
                <Nav.Link as={Link} to="#" onClick={handleLogout}>
                  <FaSignOutAlt className="logout-icon" /> Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login-signup">Sign In</Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="cart-icon" /> Cart
            </Nav.Link>
            {showBackButton && (
              <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft />
              </button>
            )}
          </Nav>
          <button
            ref={searchIconRef}
            className="search-toggle d-lg-none"
            onClick={toggleSearchBar}
            style={{ display: isSearchBarVisible ? 'none' : 'block' }}
          >
            <FaSearch />
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
