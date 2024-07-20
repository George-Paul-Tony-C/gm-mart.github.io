import React from 'react';
import productslide from '../images/slide6.png';
import { FaShoppingCart } from 'react-icons/fa';
import './Mobiles.css';

// Product image import 
import {
  Samsungs23,googlepixel7,Oneplus11,iphone14pro,samsunglogo,xiaomilogo,applelogo,onepluslogo,realmelogo,
  Oneplus10,iphone11,huawei10,samsungs10lite,samsungs20fe,googlepixel5,
} from '../images.js';
// end
const categoryData = {
  title: 'Mobiles',
  description: 'All kinds of mobile phones.',
  image: productslide,
  brands: [
    { name: 'Samsung', logo:samsunglogo },
    { name: 'Apple', logo: applelogo },
    { name: 'Xiaomi', logo: xiaomilogo},
    { name: 'Oneplus', logo: onepluslogo },
    { name: 'Realme', logo: realmelogo },
  ],
  products: [
    { id: 'Samsungs23', name: 'Samsung S23', mrp: '10000', price: 80000, image: Samsungs23 },
    { id: 'google pixel 7', name: 'google pixel 7', mrp: '80000', price: 60000, image: googlepixel7 },
    { id: 'Oneplus 11', name: 'Oneplus 11', mrp: '50000', price: 40000, image: Oneplus11 },
    { id: 'Iphone 14 pro', name: 'Iphone 14 pro', mrp: '150000', price: 125000, image: iphone14pro },
    // Add more products as needed
    { id: 'Oneplus 10', name: 'Oneplus 10', mrp: '40000', price: 35000, image: Oneplus10 },
    { id: 'Iphone 11', name: 'Iphone 11', mrp: '50000', price: 45000, image: iphone11},
    { id: 'Samsung S10 lite', name: 'Samsung s10 lite', mrp: '10000', price: 8000, image: samsungs10lite },
    { id: 'google pixel 5', name: 'google pixel 5', mrp: '45000', price: 30000, image: googlepixel5 },
    { id: 'Huawei 10', name: 'Huawei 10', mrp: '50000', price: 40000, image: huawei10 },
    { id: 'Samsung S20 FE', name: 'Samsung S20FE', mrp: '30000', price: 25000, image: samsungs20fe},
  ]
};

function Mobiles({ addToCart }) {
  const { title, description, image, brands, products } = categoryData;

  return (
    <div className="mobiles-page">
      <h1 className="mobiles-page-title">{title}</h1>
      <p className="mobiles-page-description">{description}</p>
      <div className="mobiles-page-image-container">
        <img src={image} alt={title} className="mobiles-page-image" />
      </div>
      <div className="mobiles-page-brands-container">
        {brands.map((brand, index) => (
          <div key={index} className="mobiles-page-brand">
            <img src={brand.logo} alt={brand.name} className="mobiles-page-brand-logo" />
            <h3 className="mobiles-page-brand-name">{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="mobiles-page-products-container">
        {products.map((product, index) => (
          <div key={index} className="mobiles-page-product-card">
            <img src={product.image} alt={product.name} className="mobiles-page-product-image" />
            <div className="mobiles-page-product-info">
              <div className="mobiles-page-product-name">{product.name}</div>
              <div className="mobiles-page-product-pricing">
                <span className="mobiles-page-mrp">&#8377;{product.mrp}</span>
                <span className="mobiles-page-price">&#8377;{product.price.toFixed(2)}</span>
                <button className="mobiles-page-add-to-cart-button" onClick={() => addToCart(product)}>
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

export default Mobiles;

