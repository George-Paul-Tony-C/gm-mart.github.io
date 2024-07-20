import React from 'react';
import productimg from '../images/product3.jpg';
import productslide from '../images/slide6.png';
import { FaShoppingCart } from 'react-icons/fa';
import samsunglogo from '../images/AppliancesImg/samsung.png';
import xiaomilogo from '../images/AppliancesImg/xiaomi.png';
import './Electronics.css';

const categoryData = {
  title: 'Electronics',
  description: 'All kinds of electronic items.',
  image: productslide,
  brands: [
    { name: 'Samsung', logo: samsunglogo },
    { name: 'Boat', logo: productimg },
    { name: 'Xiaomi', logo: xiaomilogo},
    { name: 'Asus', logo: productimg },
    { name: 'FireBoult', logo: productimg },
  ],
  products: [
    { id: 1, name: 'Product 1', mrp: '100', price: 80, image: productimg },
    { id: 2, name: 'Product 2', mrp: '200', price: 160, image: productimg },
    { id: 3, name: 'Product 3', mrp: '300', price: 240, image: productimg },
    { id: 4, name: 'Product 4', mrp: '400', price: 320, image: productimg },
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
