import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './SearchResultsPage.css';
import { allProducts } from './ProductData'; // Import combined product data

function SearchResultsPage({ searchQuery, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.id.toString().toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  return (
    <Container className="search-results-page">
      <h2>Search Results for "{searchQuery}"</h2>
      <Row className="justify-content-center">
        {filteredProducts.map(product => (
          <Col md={3} className="d-flex align-items-stretch" key={product.id}>
            <Card className="product-card">
              <div className="product-card-image-container">
                <Card.Img variant="top" src={product.image} className="product-card-image" />
              </div>
              <Card.Body className="product-card-body">
                <Card.Title className="product-card-name">{product.name}</Card.Title>
                <Card.Text className="product-card-description">{product.description}</Card.Text>
                <div className="product-card-price-section">
                  <Card.Text className="product-card-mrp">&#8377;{product.mrp}</Card.Text>
                  <Card.Text className="product-card-price">&#8377;{product.price}</Card.Text>
                </div>
                <Button variant="primary" className="product-card-add-to-cart-button" onClick={() => addToCart(product)}>
                  <FaShoppingCart /> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchResultsPage;
