import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 0; // Add your discount logic here
  const tax = totalPrice * 0.18; // Example tax calculation (18%)

  const increaseQuantity = (item) => {
    updateQuantity(item, item.quantity + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { total: (totalPrice - discount + tax).toFixed(2) } });
  };

  return (
    <Container className='cart-container'>
      <h2 className="my-shopping-cart">My Shopping Cart</h2>
      <Table responsive>
        <thead>
          <tr className='cart-title'>
            <th>Product Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">Your cart is empty</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <Row>
                    <Col md={4}>
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                    </Col>
                    <Col md={8}>
                      <h5>{item.name}</h5>
                    </Col>
                  </Row>
                </td>
                <td>&#8377;{item.price.toFixed(2)}</td>
                <td>
                  <div className="quantity-control">
                    <Button variant="secondary" onClick={() => decreaseQuantity(item)}>-</Button>
                    <Form.Control 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      readOnly
                      className="quantity-input"
                    />
                    <Button variant="secondary" onClick={() => increaseQuantity(item)}>+</Button>
                  </div>
                </td>
                <td>&#8377;{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item)}>Remove</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formDiscountCode">
              <Form.Label>Discount Code</Form.Label>
              <Form.Control type="text" placeholder="Enter discount code" />
            </Form.Group>
            <Button variant="primary" type="submit">Apply Discount</Button>
          </Form>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>&#8377;{totalPrice.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>-&#8377;{discount.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax(GST):</td>
                <td>&#8377;{tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td><strong>&#8377;{(totalPrice - discount + tax).toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </Table>
          <div className='cart-buttons'>
            <Button variant="success" className="mr-2" onClick={handleCheckout}>Checkout</Button>
            <Button variant="secondary" onClick={() => navigate(-1)}>Continue Shopping</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
