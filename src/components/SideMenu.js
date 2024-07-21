import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';
import { FaTimes, FaHome, FaMobileAlt, FaTv, FaLaptop, FaTshirt, FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useCookies } from 'react-cookie';

function SideMenu({ isOpen, toggleMenu }) {
  const [cookies, , removeCookie] = useCookies(['user']);
  const user = cookies.user;

  const handleLogout = () => {
    removeCookie('user');
  };

  return (
    <>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <FaTimes />
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                <FaHome className="menu-icon" /> Home
              </Link>
            </li>
            <li>
              <Link to="/category/mobiles" onClick={toggleMenu}>
                <FaMobileAlt className="menu-icon" /> Mobiles
              </Link>
            </li>
            <li>
              <Link to="/category/appliances" onClick={toggleMenu}>
                <FaTv className="menu-icon" /> Appliances
              </Link>
            </li>
            <li>
              <Link to="/category/electronics" onClick={toggleMenu}>
                <FaLaptop className="menu-icon" /> Electronics
              </Link>
            </li>
            <li>
              <Link to="/category/fashion" onClick={toggleMenu}>
                <FaTshirt className="menu-icon" /> Fashion
              </Link>
            </li>
            <li>
              <Link to="/category/grocery" onClick={toggleMenu}>
                <FaShoppingCart className="menu-icon" /> Grocery
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    <FaUser className="menu-icon" /> {user}
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={handleLogout}>
                    <FaSignOutAlt className="menu-icon" /> Logout
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                <FaShoppingCart className="menu-icon" /> Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default SideMenu;
