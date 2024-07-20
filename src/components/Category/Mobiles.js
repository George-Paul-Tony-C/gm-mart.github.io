import React from 'react';
import productimg from '../images/product3.jpg';
import productslide from '../images/slide6.png';
import { FaShoppingCart } from 'react-icons/fa';
import samsunglogo from '../images/AppliancesImg/samsung.png';
import xiaomilogo from '../images/AppliancesImg/xiaomi.png';
import applelogo from '../images/MobileImg/apple.png';
import onepluslogo from '../images/MobileImg/oneplus.png';
import realmelogo from '../images/MobileImg/realme.png';
import './Mobiles.css';

// Product image import 
import Samsungs23 from '../images/MobileImg/Samsungs23.webp';
import googlepixel7 from '../images/MobileImg/googlepixel7.webp';
import Oneplus11 from '../images/MobileImg/oneplus11.webp';
import iphone14pro from '../images/MobileImg/iphone14pro.webp';
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
    { id: 'Samsungs23', name: 'Samsungs23', mrp: '10000', price: 80000, image: Samsungs23 },
    { id: 'google pixel 7', name: 'google pixel 7', mrp: '80000', price: 60000, image: googlepixel7 },
    { id: 'Oneplus 11', name: 'Oneplus 11', mrp: '50000', price: 40000, image: Oneplus11 },
    { id: 'Iphone 14 pro', name: 'Iphone 14 pro', mrp: '150000', price: 125000, image: iphone14pro },
    // Add more products as needed
  ]
};

function Mobiles({ addToCart }) {
  const { title, description, image, brands, products } = categoryData;

  return (
    <div className="mobiles-page-unique">
      <h1 className="mobiles-page-unique-title">{title}</h1>
      <p className="mobiles-page-unique-description">{description}</p>
      <div className="mobiles-page-unique-image-container">
        <img src={image} alt={title} className="mobiles-page-unique-image" />
      </div>
      <div className="mobiles-page-unique-brands-container">
        {brands.map((brand, index) => (
          <div key={index} className="mobiles-page-unique-brand">
            <img src={brand.logo} alt={brand.name} className="mobiles-page-unique-brand-logo" />
            <h3 className="mobiles-page-unique-brand-name">{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="mobiles-page-unique-products-container">
        {products.map((product, index) => (
          <div key={index} className="mobiles-page-unique-product-card">
            <img src={product.image} alt={product.name} className="mobiles-page-unique-product-image" />
            <div className="mobiles-page-unique-product-info">
              <div className="mobiles-page-unique-product-name">{product.name}</div>
              <div className="mobiles-page-unique-product-pricing">
                <span className="mobiles-page-unique-mrp">&#8377;{product.mrp}</span>
                <span className="mobiles-page-unique-price">&#8377;{product.price.toFixed(2)}</span>
                <button className="mobiles-page-unique-add-to-cart-button" onClick={() => addToCart(product)}>
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
