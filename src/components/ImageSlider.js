import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import image1 from './images/slide1.png';
import image2 from './images/slide2.png';
import image3 from './images/slide3.png';
import image4 from './images/slide4.png';
import image5 from './images/slide5.png';
import image6 from './images/slide6.png';
import './ImageSlider.css';

function ImageSlider() {
  const images = [
    { src: image1},
    { src: image2},
    { src: image3},
    { src: image4},
    {src: image5},
    {src:image6},
  ];

  return (
    <Container className="custom-container">
      <Carousel className="imageslider">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ImageSlider;
