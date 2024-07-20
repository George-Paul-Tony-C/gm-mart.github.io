import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaArrowLeft, FaUser } from 'react-icons/fa';
import logo from './images/logo.png';
import { useCookies } from 'react-cookie';

function AppNavbar({ toggleMenu, setSearchQuery }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [cookies, , removeCookie] = useCookies(['user']);
  const [user, setUser] = useState(null);

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
          <Form className="mx-auto searchbarcontainer" inline onSubmit={handleSearchSubmit}>
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mr-sm-2 searchbar" 
              value={searchInput}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit" className='search-button'>Search</Button>
          </Form>
          <Nav className="ml-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/" className="user-info">
                  <FaUser className="user-icon" /> {user}
                </Nav.Link>
                <Nav.Link as={Link} to="#" onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login-signup">Sign In</Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            {showBackButton && (
              <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft />
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
