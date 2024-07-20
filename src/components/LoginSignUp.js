import React, { useEffect, useState } from 'react';
import './LoginSignUp.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import icons
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const showBackButton = location.pathname !== '/';
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState({});

  useEffect(() => {
    document.body.classList.add('login-signup-body');
    return () => {
      document.body.classList.remove('login-signup-body');
    };
  }, []);

  useEffect(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const handleSignUp = () => {
    document.getElementById('login-signup-container').classList.add('right-panel-active');
  };

  const handleSignIn = () => {
    document.getElementById('login-signup-container').classList.remove('right-panel-active');
  };

  const handleRegister = () => {
    setRegisteredUsers({
      ...registeredUsers,
      [signUpName]: signUpPassword,
    });
    setSignUpName('');
    setSignUpPassword('');
    handleSignIn();
  };

  const handleLogin = () => {
    if (
      (signInUsername === 'George' && signInPassword === '12345678') ||
      (registeredUsers[signInUsername] && registeredUsers[signInUsername] === signInPassword)
    ) {
      setCookie('user', signInUsername, { path: '/' });
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-signup-container" id="login-signup-container">
      <div className="login-signup-form-container login-signup-sign-up-container">
        <form className="login-signup-form" action="#">
          <h1 className="login-signup-h1">Create Account</h1>
          <div className="login-signup-social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="login-signup-span">or use your email for registration</span>
          <input
            className="login-signup-input"
            type="text"
            placeholder="Name"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input
            className="login-signup-input"
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button
            type="button"
            className="login-signup-button"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-signup-form-container login-signup-sign-in-container">
        <form className="login-signup-form" action="#">
          <h1 className="login-signup-h1">Sign in</h1>
          <div className="login-signup-social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="login-signup-span">or use your account</span>
          <input
            className="login-signup-input"
            type="text"
            placeholder="Username"
            value={signInUsername}
            onChange={(e) => setSignInUsername(e.target.value)}
          />
          <input
            className="login-signup-input"
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <a className="login-signup-a" href="#">Forgot your password?</a>
          <button
            type="button"
            className="login-signup-button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="login-signup-overlay-container">
        <div>
          {showBackButton && (
            <button className="home-back-button" onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </button>
          )}
        </div>
        <div className="login-signup-overlay">
          <div className="login-signup-overlay-panel login-signup-overlay-left">
            <h1 className="login-signup-h1">Welcome Back!</h1>
            <p className="login-signup-p">To keep connected with us please login with your personal info</p>
            <button
              className="login-signup-button login-signup-ghost"
              id="signIn"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="login-signup-overlay-panel login-signup-overlay-right">
            <h1 className="login-signup-h1">Hello, Friend!</h1>
            <p className="login-signup-p">Enter your personal details and start journey with us</p>
            <button
              className="login-signup-button login-signup-ghost"
              id="signUp"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
