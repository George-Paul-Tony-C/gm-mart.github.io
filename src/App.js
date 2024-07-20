import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useCookies } from 'react-cookie';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Categories from './components/Categories';
import ImageSlider from './components/ImageSlider';
import ProductSlider from './components/ProductSlider';
import ProductCards from './components/ProductCards';
import Footer from './components/Footer';
import CategoryPage from './components/Category/CategoryPage';
import GroceryItemPage from './components/Category/GroceryItemPage';
import SearchResultsPage from './components/SearchResultsPage'; // New Component
import MotionWrapper from './components/MotionWrapper';
import Cart from './components/Cart';
import LoginSignUp from './components/LoginSignUp';
import Checkout from './components/Checkout'; // Import Checkout component
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cookies] = useCookies(['user']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const menuToggle = document.querySelector('.menu-toggle');
      if (window.scrollY > 50) {
        menuToggle.classList.add('sticky');
      } else {
        menuToggle.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const updateQuantity = (product, quantity) => {
    setCart(cart.map(item => item.id === product.id ? { ...item, quantity: Number(quantity) } : item));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 0; // Add your discount logic here
  const tax = totalPrice * 0.18; // Example tax calculation (18%)

  return (
    <Router>
      <AppContent 
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen} 
        addToCart={addToCart} 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cookies={cookies}
        totalPrice={totalPrice}
        discount={discount}
        tax={tax}
      />
    </Router>
  );
}

function AppContent({ toggleMenu, isMenuOpen, addToCart, cart, removeFromCart, updateQuantity, searchQuery, setSearchQuery, cookies, totalPrice, discount, tax }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login-signup';

  return (
    <div className="App">
      {!isLoginPage && (
        <>
          <AppNavbar toggleMenu={toggleMenu} setSearchQuery={setSearchQuery} />
          <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
      )}
      <div className="App-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {cookies.user ? (
              <>
                <Route
                  path="/"
                  element={
                    <MotionWrapper>
                      <Home addToCart={addToCart} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/category/:name"
                  element={
                    <MotionWrapper>
                      <CategoryPage addToCart={addToCart} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/grocery/:itemName"
                  element={
                    <MotionWrapper>
                      <GroceryItemPage addToCart={addToCart} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <MotionWrapper>
                      <SearchResultsPage searchQuery={searchQuery} addToCart={addToCart} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <MotionWrapper>
                      <Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <MotionWrapper>
                      <Checkout cartItems={cart} totalPrice={totalPrice} discount={discount} tax={tax} />
                    </MotionWrapper>
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <MotionWrapper>
                      <ProductDetail addToCart={addToCart}/>
                    </MotionWrapper>
                  }
                />
              </>
            ) : (
              <Route
                path="*"
                element={<Navigate to="/login-signup" />}
              />
            )}
            <Route
              path="/login-signup"
              element={
                <MotionWrapper>
                  <LoginSignUp />
                </MotionWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      {!isLoginPage && <Footer />}
    </div>
  );
}

const Home = ({ addToCart }) => (
  <>
    <Categories />
    <ImageSlider />
    <ProductSlider />
    <ProductCards addToCart={addToCart} />
  </>
);

export default App;
