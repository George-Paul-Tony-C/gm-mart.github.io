import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mobile from './images/mobiles.webp';
import appliances from './images/appliances.webp';
import electronics from './images/electronics.webp';
import fashion from './images/fashion.webp';
import grocery from './images/grocery.webp';
import './Categories.css';

const categories = [
  { name: 'Mobiles', image: mobile },
  { name: 'Appliances', image: appliances },
  { name: 'Electronics', image: electronics },
  { name: 'Fashion', image: fashion },
  { name: 'Grocery', image: grocery },
];

function Categories() {
  return (
    <Container className="categories">
      <Row className="justify-content-center">
        {categories.map((category, index) => (
          <Col md={2} key={index} className="d-flex align-items-stretch">
            <Link to={`/category/${category.name.toLowerCase()}`} className="category-card text-center">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-name">{category.name}</div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;
