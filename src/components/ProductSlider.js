import React, { useRef } from 'react';
import {
  AppCombo,Designlap,macbookair,tufgaming,Stv,Swashing,Sfridge,Svacuum,LgAc,
} from './images.js'
import './ProductSlider.css';

const products = [
  { id: 'Samsung Fridge', name: 'Samsung Fridge', mrp: '100000', price: 80000, image: Sfridge },
  { id: 'Samsung Washing', name: 'Samsung Washing', mrp: '20000', price: 16000, image: Swashing },
  { id: 'Samsung tv', name: 'Samsung tv', mrp: '300000', price: 240000, image: Stv },
  { id: 'Samsung vacuum', name: 'Samsung Vacuum', mrp: '400', price: 320, image: Svacuum },
  { id: 'Lg AC', name: 'Lg Ac', image: LgAc },
  { id: 'Designer lap', name: 'Designer Lap', image: Designlap },
  { id: 'macbookair', name: 'Macbook AIr', image: macbookair },
  { id: 'tufgaming', name: 'Tuf Gaming', image: tufgaming},
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
