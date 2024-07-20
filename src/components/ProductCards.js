import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductCards.css';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product1.jpg';
import product4 from './images/product2.jpg';

// Export the product categories
export const productCategories = [
  {
    title: 'Category 1',
    products: [
      { id: 1, name: 'Product 1', description: 'Description 1', image: product1, price: 100, mrp: 120 },
      { id: 2, name: 'Product 2', description: 'Description 2', image: product2, price: 100, mrp: 120 },
      { id: 3, name: 'Product 3', description: 'Description 3', image: product3, price: 100, mrp: 120 },
      { id: 4, name: 'Product 4', description: 'Description 4', image: product4, price: 100, mrp: 120 },
    ]
  },
  {
    title: 'Category 2',
    products: [
      { id: 5, name: 'Product 5', description: 'Description 5', image: product1, price: 100, mrp: 120 },
      { id: 6, name: 'Product 6', description: 'Description 6', image: product2, price: 100, mrp: 120 },
      { id: 7, name: 'Product 7', description: 'Description 7', image: product3, price: 100, mrp: 120 },
      { id: 8, name: 'Product 8', description: 'Description 8', image: product4, price: 100, mrp: 120 },
    ]
  },
  {
    title: 'Category 3',
    products: [
      { id: 9, name: 'Product 9', description: 'Description 9', image: product1, price: 100, mrp: 120 },
      { id: 10, name: 'Product 10', description: 'Description 10', image: product2, price: 100, mrp: 120 },
      { id: 11, name: 'Product 11', description: 'Description 11', image: product3, price: 100, mrp: 120 },
      { id: 12, name: 'Product 12', description: 'Description 12', image: product4, price: 100, mrp: 120 },
    ]
  }
];

function ProductCards({ addToCart }) {
  return (
    <Container className="product-cards">
      {productCategories.map((category, index) => (
        <div key={index} className="product-category">
          <h2 className="product-category-title">{category.title}</h2>
          <Row className="justify-content-center">
            {category.products.map(product => (
              <Col md={3} className="d-flex align-items-stretch" key={product.id}>
                <Card className="product-card">
                  <div className="product-card-image-container">
                    <Card.Img variant="top" src={product.image} className="product-card-image" />
                  </div>
                  <Card.Body className="product-card-body">
                    <Card.Title className="product-card-name">{product.name}</Card.Title>
                    <Card.Text className="product-card-description">{product.description}</Card.Text>
                    <div className="product-card-price-section">
                      <Card.Text className="product-card-mrp">${product.mrp}</Card.Text>
                      <Card.Text className="product-card-price">${product.price}</Card.Text>
                    </div>
                    <Button variant="primary" className="product-card-add-to-cart-button" onClick={() => addToCart(product)}>
                      <FaShoppingCart /> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ProductCards;
