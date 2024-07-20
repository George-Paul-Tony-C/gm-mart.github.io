import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import './Fashion.css';
import bannerImage from '../images/FashionImg/fashionbanner.png'; // Replace with actual path
import indianwear from '../images/FashionImg/indianwear.png';
import whesternwear from '../images/FashionImg/whesternwear.png';
import menshirt from '../images/FashionImg/shirt.png';
import Tshirt from '../images/FashionImg/Tshirt.png';
import Footwear from '../images/FashionImg/footwear.png';

const fashionCategories = [
  {
    id: 'fashion',
    title: 'Categories',
    items: [
      { id: 'Indianwear', name: 'Indianwear', image: indianwear },
      { id: 'Westernwear', name: 'Westernwear', image: whesternwear },
      { id: 'Mens Shirt', name: 'Mens Shirt', image: menshirt },
      { id: 'Mens Tshirt', name: 'Mens Tshirt', image: Tshirt },
      { id: 'Footwear', name: 'Footwear', image: Footwear },
      // { id: 6, name: 'Bags', image: bannerImage },
      // { id: 7, name: 'Jewellery', image: bannerImage },
      // { id: 8, name: 'Kids', image: bannerImage },
    ],
  },
];

function Fashion() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = fashionCategories[0].items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fashion-page">
      <img src={bannerImage} alt="Banner" className="fashion-banner" />
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            {/* <Form inline className="d-flex mb-4">
              <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="button">Search</Button>
            </Form> */}
          </Col>
        </Row>
      </Container>
      <div className="fashion-category-section">
        <h2>Categories</h2>
        <div className="fashion-category-items">
          {filteredItems.map(item => (
            <Link to={`/fashion/${item.name}`} key={item.id} className="fashion-category-card">
              <img src={item.image} alt={item.name} className="fashion-category-image" />
              <div className="fashion-category-info">
                <h3>{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fashion;
