import React from 'react';
import productimg from '../images/product3.png';
import productslide from '../images/AppliancesImg/appliances1.png';
import { FaShoppingCart } from 'react-icons/fa';
import './Appliances.css';

import {
  
  // Vegitables 
  tomato,potato,onion,carrot,cauliflower,capsicum,cucumber,ginger,ladiesfinger,garlic,corianderleave,corn,
  // fruits
  apple,banana,avacado,cherry,grape,guava,mango,orange,pineapple,pomegranate,watermelon,jackfruit,
  // Fashion
  Tshirt,shirt,
  // electronics and Appliances
  Fan,Sbuds,SonyHeadphone,washingmech,LgAc,Lgfridge,windowAC,
  AppCombo,Designlap,macbookair,tufgaming,Stv,Swashing,Sfridge,Svacuum,
  Samsungs23,googlepixel7,Oneplus11,iphone14pro,samsunglogo,xiaomilogo,applelogo,onepluslogo,realmelogo,
  panasoniclogo,whirlpoollogo ,LGlogo,
} from '../images.js';

const categoryData = {
  title: 'Appliances',
  description: 'Home and kitchen appliances.',
  image: productslide,
  brands: [
    { name: 'Samsung', logo: samsunglogo },
    { name: 'LG', logo: LGlogo },
    { name: 'Xiaomi', logo: xiaomilogo },
    { name: 'Panasonic', logo: panasoniclogo },
    { name: 'Whirlpool', logo: whirlpoollogo },
  ],
  products: [
    { id: 'Samsung Fridge', name: 'Samsung Fridge', mrp: '100000', price: 80000, image: Sfridge },
    { id: 'Samsung Washing', name: 'Samsung Washing', mrp: '20000', price: 16000, image: Swashing },
    { id: 'Samsung tv', name: 'Samsung tv', mrp: '300000', price: 240000, image: Stv },
    { id: 'Samsung vacuum', name: 'Samsung Vacuum', mrp: '400', price: 320, image: Svacuum },
    { id:'Refrigerator', name: 'Refrigerator', description: 'Double Door Refrigerator', image: Lgfridge, price: 50000, mrp: 60000 },
  { id: 'Washing Machine', name: 'Washing Machine', description: 'Washing Machine', image: washingmech, price: 15000, mrp: 20000 },
  { id: 'Home Combo', name: 'Home Combo',mrp: '100000', price: 80000, image: AppCombo },
    { id: 'Appliance 4', name: 'Appliance 4', mrp: '400', price: 320, image: productimg },
    { id: 'Appliance 1', name: 'Appliance 1', mrp: '100', price: 80, image: productimg },
    { id: 'Appliance 2', name: 'Appliance 2', mrp: '200', price: 160, image: productimg },
    { id: 'Appliance 3', name: 'Appliance 3', mrp: '300', price: 240, image: productimg },
    { id: 'Appliance 4', name: 'Appliance 4', mrp: '400', price: 320, image: productimg },
    { id: 'Appliance 1', name: 'Appliance 1', mrp: '100', price: 80, image: productimg },
    { id: 'Appliance 2', name: 'Appliance 2', mrp: '200', price: 160, image: productimg },
    { id: 'Appliance 3', name: 'Appliance 3', mrp: '300', price: 240, image: productimg },
    { id: 'Appliance 4', name: 'Appliance 4', mrp: '400', price: 320, image: productimg },
    // Add more products as needed
  ]
};

function Appliances({ addToCart }) {
  const { title, description, image, brands, products } = categoryData;

  return (
    <div className="appliance-page">
      <h1 className="appliance-page-title">{title}</h1>
      <p className="appliance-page-description">{description}</p>
      <div className="appliance-page-image-container">
        <img src={image} alt={title} className="appliance-page-image" />
      </div>
      <div className="appliance-page-brands-container">
        {brands.map((brand, index) => (
          <div key={index} className="appliance-page-brand">
            <img src={brand.logo} alt={brand.name} className="appliance-page-brand-logo" />
            <h3 className="appliance-page-brand-name">{brand.name}</h3>
          </div>
        ))}
      </div>
      <div className="appliance-page-products-container">
        {products.map((product, index) => (
          <div key={index} className="appliance-page-product-card">
            <img src={product.image} alt={product.name} className="appliance-page-product-image" />
            <div className="appliance-page-product-info">
              <div className="appliance-page-product-name">{product.name}</div>
              <div className="appliance-page-product-pricing">
                <span className="appliance-page-mrp">&#8377;{product.mrp}</span>
                <span className="appliance-page-price">&#8377;{product.price.toFixed(2)}</span>
                <button className="appliance-page-add-to-cart-button" onClick={() => addToCart(product)}>
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

export default Appliances;
