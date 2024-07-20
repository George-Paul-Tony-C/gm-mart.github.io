import React, { useRef } from 'react';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import './ProductSlider.css';

const products = [
  { id: 1, name: 'Product 1', image: product1 },
  { id: 2, name: 'Product 2', image: product2 },
  { id: 3, name: 'Product 3', image: product3 },
  { id: 4, name: 'Product 4', image: product4 },
  { id: 5, name: 'Product 1', image: product1 },
  { id: 6, name: 'Product 2', image: product2 },
  { id: 7, name: 'Product 3', image: product3 },
  { id: 8, name: 'Product 4', image: product4 },
];

function ProductSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="slider-container">
      <div className="product-slider-container">
        <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
        <div className="product-slider" ref={sliderRef}>
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
      </div>
    </div>
  );
}

export default ProductSlider;
