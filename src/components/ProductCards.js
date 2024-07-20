import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProductCards.css';
import { AppCombo, Designlap, macbookair, tufgaming, Stv, Swashing, Sfridge, Svacuum, Fan, Sbuds, SonyHeadphone, washingmech, LgAc, Lgfridge, windowAC } from './images.js';

export const productCategories = [
  {
    title: 'General 1',
    products: [
      { id: 'Fan', name: 'Fan', mrp: '1000', price: 800, image: Fan },
      { id: 'Samsung Buds Headphone', name: 'Samsung Buds', mrp: '8000', price: 7000, image: Sbuds },
      { id: 'Lg Window Ac', name: 'Lg Window Ac', mrp: '100000', price: 80000, image: windowAC },
      { id: 'Sony OvertheEar Headphone', name: 'Sony Headphone', mrp: '100000', price: 80000, image: SonyHeadphone },
    ],
  },
  {
    title: 'General 2',
    products: [
      { id: 'Refrigerator', name: 'Refrigerator', description: 'Double Door Refrigerator', image: Lgfridge, price: 50000, mrp: 60000 },
      { id: 'Washing Machine', name: 'Washing Machine', description: 'Washing Machine', image: washingmech, price: 15000, mrp: 20000 },
      { id: 'Home Combo', name: 'Home Combo', mrp: '100000', price: 80000, image: AppCombo },
      { id: 'Samsung Fridge', name: 'Samsung Fridge', mrp: '100000', price: 80000, image: Sfridge },
    ],
  },
  {
    title: 'General 3',
    products: [
      { id: 'Home Combo', name: 'Home Combo', mrp: '100000', price: 80000, image: AppCombo },
      { id: 'Designer lap', name: 'Designer Lap', mrp: '100000', price: 80000, image: Designlap },
      { id: 'macbookair', name: 'Macbook AIr', mrp: '100000', price: 80000, image: macbookair },
      { id: 'tufgaming', name: 'Tuf Gaming', mrp: '100000', price: 80000, image: tufgaming },
    ],
  },
  {
    title: 'Samsung Products',
    products: [
      { id: 'Samsung Fridge', name: 'Samsung Fridge', mrp: '100000', price: 80000, image: Sfridge },
      { id: 'Samsung Washing', name: 'Samsung Washing', mrp: '20000', price: 16000, image: Swashing },
      { id: 'Samsung tv', name: 'Samsung tv', mrp: '300000', price: 240000, image: Stv },
      { id: 'Samsung vacuum', name: 'Samsung Vacuum', mrp: '400', price: 320, image: Svacuum },
    ],
  },
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
                  <Link to={`/product/${product.id}`}>
                    <div className="product-card-image-container">
                      <Card.Img variant="top" src={product.image} className="product-card-image" />
                    </div>
                  </Link>
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
