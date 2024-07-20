import React from 'react';
import productimg from '../images/product3.png';
import productslide from '../images/slide6.png';
import { FaShoppingCart } from 'react-icons/fa';
import './Electronics.css';

import {
  Fan,Sbuds,SonyHeadphone,washingmech,LgAc,Lgfridge,windowAC,
  AppCombo,Designlap,macbookair,tufgaming,Stv,Swashing,Sfridge,Svacuum,
  Samsungs23,googlepixel7,Oneplus11,iphone14pro,samsunglogo,xiaomilogo,applelogo,onepluslogo,realmelogo,
  boatlogo,fireboulylogo,asuslogo,
} from '../images.js'

const categoryData = {
  title: 'Electronics',
  description: 'All kinds of electronic items.',
  image: productslide,
  brands: [
    { name: 'Samsung', logo: samsunglogo },
    { name: 'Boat', logo: boatlogo },
    { name: 'Xiaomi', logo: xiaomilogo},
    { name: 'Asus', logo: asuslogo},
    { name: 'FireBoult', logo: fireboulylogo },
  ],
  products: [
  { id: 'Headphones', name: 'Headphones', description: 'Noise Cancelling Headphones', image: SonyHeadphone, price: 200, mrp: 250 },
  { id: 'Designer lap', name: 'Designer Lap',mrp: '100000', price: 80000, image: Designlap },
  { id: 'macbookair', name: 'Macbook AIr',mrp: '100000', price: 80000, image: macbookair },
  { id: 'tufgaming', name: 'Tuf Gaming',mrp: '100000', price: 80000, image: tufgaming},
  { id: 'Fan', name: 'Fan',mrp: '1000', price: 800, image: Fan },
  { id: 'Samsung Buds Headphone', name: 'Samsung Buds',mrp: '8000', price: 7000, image: Sbuds },
  { id: 'Lg Window Ac', name: 'Lg Window Ac',mrp: '100000', price: 80000, image: windowAC },
  { id: 'Sony OvertheEar Headphone', name: 'Sony Headphone',mrp: '100000', price: 80000, image:SonyHeadphone},
    // Add more products as needed
  ]
};

function Electronics({ addToCart }) {
  const { title, description, image, brands, products } = categoryData;

  return (
    <div className="electronics-page-unique">
      <h1 className="electronics-page-unique-title">{title}</h1>
      <p className="electronics-page-unique-description">{description}</p>
      <div className="electronics-page-unique-image-container">
        <img src={image} alt={title} className="electronics-page-unique-image" />
      </div>
      <div className="electronics-page-unique-brands-container">
        {brands.map((brand, index) => (
          <div key={index} className="electronics-page-unique-brand">
            <img src={brand.logo} alt={brand.name} className="electronics-page-unique-brand-logo" />
            <h3 className="electronics-page-unique-brand-name">{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="electronics-page-unique-products-container">
        {products.map((product, index) => (
          <div key={index} className="electronics-page-unique-product-card">
            <img src={product.image} alt={product.name} className="electronics-page-unique-product-image" />
            <div className="electronics-page-unique-product-info">
              <div className="electronics-page-unique-product-name">{product.name}</div>
              <div className="electronics-page-unique-product-pricing">
                <span className="electronics-page-unique-mrp">&#8377;{product.mrp}</span>
                <span className="electronics-page-unique-price">&#8377;{product.price.toFixed(2)}</span>
                <button className="electronics-page-unique-add-to-cart-button" onClick={() => addToCart(product)}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
