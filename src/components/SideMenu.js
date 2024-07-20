import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';
import { FaTimes, FaHome, FaMobileAlt, FaTv, FaLaptop, FaTshirt, FaShoppingCart } from 'react-icons/fa';

function SideMenu({ isOpen, toggleMenu }) {
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
          </ul>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default SideMenu;
