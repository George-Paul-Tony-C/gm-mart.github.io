import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Tab, Nav } from 'react-bootstrap';
import './Checkout.css';

const Checkout = () => {
  const [key, setKey] = useState('shipping');
  const [address, setAddress] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    street: '',
    apartment: '',
    zip: '',
    city: '',
    state: '',
    country: ''
  });

  const [payment, setPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setKey('delivery');
  };

  const handleUpdateAddress = () => {
    setKey('shipping');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    // Implement your payment logic here
  };

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <Container className="checkout-container">
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs" className="checkout-tabs">
          <Nav.Item>
            <Nav.Link eventKey="shipping" className="checkout-tab-link">Shipping</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="delivery" className="checkout-tab-link">Delivery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="payment" className="checkout-tab-link">Payment</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="shipping">
            <Form onSubmit={handleShippingSubmit} className="checkout-form">
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formEmail" className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <Form.Control 
                      type="email" 
                      placeholder="Email address" 
                      name="email" 
                      value={address.email} 
                      onChange={handleAddressChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="input-with-icon">
                    <i className="fas fa-phone"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Phone number" 
                      name="phone" 
                      value={address.phone} 
                      onChange={handleAddressChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formFirstName" className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="First name" 
                      name="firstName" 
                      value={address.firstName} 
                      onChange={handleAddressChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formLastName" className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Last name" 
                      name="lastName" 
                      value={address.lastName} 
                      onChange={handleAddressChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formStreet" className="input-with-icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Street address" 
                      name="street" 
                      value={address.street} 
                      onChange={handleAddressChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formApartment" className="input-with-icon">
                    <i className="fas fa-building"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Apartment, Building, Floor" 
                      name="apartment" 
                      value={address.apartment} 
                      onChange={handleAddressChange} 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry" className="input-with-icon">
                    <i className="fas fa-globe"></i>
                    <Form.Control 
                      as="select" 
                      name="country" 
                      value={address.country} 
                      onChange={handleAddressChange} 
                      required
                      className="checkout-input"
                    >
                      <option value="" disabled>Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </Form.Group>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="formZip" className="input-with-icon">
                        <i className="fas fa-map-pin"></i>
                        <Form.Control 
                          type="text" 
                          placeholder="Zip" 
                          name="zip" 
                          value={address.zip} 
                          onChange={handleAddressChange} 
                          required 
                          className="checkout-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formCity" className="input-with-icon">
                        <i className="fas fa-city"></i>
                        <Form.Control 
                          type="text" 
                          placeholder="City" 
                          name="city" 
                          value={address.city} 
                          onChange={handleAddressChange} 
                          required 
                          className="checkout-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formState" className="input-with-icon">
                        <i className="fas fa-map"></i>
                        <Form.Control 
                          type="text" 
                          placeholder="State" 
                          name="state" 
                          value={address.state} 
                          onChange={handleAddressChange} 
                          required 
                          className="checkout-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="continue-button-container">
                <Button variant="primary" type="submit" className="continue-button">Continue</Button>
              </div>
            </Form>
          </Tab.Pane>
          <Tab.Pane eventKey="delivery">
            <div className="address-review">
              <h3>Shipping Address</h3>
              <p>Email: {address.email}</p>
              <p>Phone: {address.phone}</p>
              <p>Name: {address.firstName} {address.lastName}</p>
              <p>Address: {address.street}, {address.apartment}</p>
              <p>City: {address.city}, State: {address.state}, Zip: {address.zip}</p>
              <p>Country: {address.country}</p>
              <Button variant="secondary" onClick={handleUpdateAddress} className="update-button">Update Address</Button>
              <h4>Estimated Delivery Date</h4>
              <p>Expected Delivery Date: {deliveryDate.toDateString()}</p>
              <div className="next-button-container">
                <Button variant="primary" onClick={() => setKey('payment')} className="next-button">Next</Button>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="payment">
            <Form onSubmit={handlePaymentSubmit} className="checkout-form">
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formCardName" className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Name on card" 
                      name="cardName" 
                      value={payment.cardName} 
                      onChange={handlePaymentChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formCardNumber" className="input-with-icon">
                    <i className="fas fa-credit-card"></i>
                    <Form.Control 
                      type="text" 
                      placeholder="Card number" 
                      name="cardNumber" 
                      value={payment.cardNumber} 
                      onChange={handlePaymentChange} 
                      required 
                      className="checkout-input"
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formExpiryDate" className="input-with-icon">
                        <i className="fas fa-calendar-alt"></i>
                        <Form.Control 
                          type="text" 
                          placeholder="Expiry date (MM/YY)" 
                          name="expiryDate" 
                          value={payment.expiryDate} 
                          onChange={handlePaymentChange} 
                          required 
                          className="checkout-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formCvv" className="input-with-icon">
                        <i className="fas fa-lock"></i>
                        <Form.Control 
                          type="text" 
                          placeholder="CVV" 
                          name="cvv" 
                          value={payment.cvv} 
                          onChange={handlePaymentChange} 
                          required 
                          className="checkout-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="continue-button-container">
                <Button variant="primary" type="submit" className="continue-button">Submit Payment</Button>
              </div>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Checkout;
