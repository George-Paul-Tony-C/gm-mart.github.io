import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer text-center text-lg-start">
      <Container className="p-2">
        <Row>
          <Col lg={4} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-light">GM - Global Mart</h5>
            <p className="text-light">
              GM - Global Mart is your one-stop destination for all your shopping needs. 
              Our slogan, "Stay in, Shop Out", reflects our commitment to providing the best online shopping experience.
            </p>
          </Col>
          <Col lg={4} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-light">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li className="text-light">Email: support@globalmart.com</li>
              <li className="text-light">Phone: +1 234 567 890</li>
              <li className="text-light">Address: 123 Global Mart Street, Shopville, GM 12345</li>
            </ul>
          </Col>
          <Col lg={4} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-light">Follow Us</h5>
            <div className="social-icons">
              <button onClick={() => window.open('https://github.com', '_blank', 'noopener,noreferrer')}><FaGithub /></button>
              <button onClick={() => window.open('https://twitter.com', '_blank', 'noopener,noreferrer')}><FaTwitter /></button>
              <button onClick={() => window.open('https://facebook.com', '_blank', 'noopener,noreferrer')}><FaFacebook /></button>
              <button onClick={() => window.open('https://instagram.com', '_blank', 'noopener,noreferrer')}><FaInstagram /></button>
            </div>
          </Col>
          <Col md={12} className="text-center mt-4">
            <p className="copy-right text-light">
              &copy; {new Date().getFullYear()} GM - Global Mart. All Rights Reserved.<br/>Use of this website indicates your compliance with our Privacy Policy, Conditions of Carriage, Terms and Conditions.
            </p>
          </Col>
        </Row>
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
