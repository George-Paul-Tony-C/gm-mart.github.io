import React from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import {
  // Vegitables 
  tomato,potato,onion,carrot,cauliflower,capsicum,cucumber,ginger,ladiesfinger,garlic,corianderleave,corn,
  // fruits
  
} from '../images.js'
import './GroceryItemPage.css';

const itemDetails = {
    'Fresh Vegetables': [
      { id: 'tomato', name: 'Tomatoes - 1kg', price: 40, image: tomato },
      { id: 'potato', name: 'Potatoes - 1kg', price: 24, image: potato },
      { id: 'onion', name: 'Onion - 1kg', price: 60, image: onion },
      { id: 'carrot', name: 'Carrot - 1kg', price: 100, image: carrot },
      { id: 'cauliflower', name: 'Cauliflower - 1pcs', price: 20, image:cauliflower },
      { id: 'capsicum', name: 'Capsicum - 1kg', price: 50, image: capsicum },
      { id: 'cucumber', name: 'Cucumber - 500g', price: 20, image: cucumber },
      { id: 'ginger', name: 'Ginger - 250g', price: 40, image: ginger },
      { id: 'ladiesfinger', name: 'Ladies Finger - 500g', price: 30, image: ladiesfinger },
      { id: 'garlic', name: 'Garlic - 1kg', price: 80, image: garlic },
      { id: 'corianderleave', name: 'Coriander Leave - 250g', price: 20, image: corianderleave },
      { id: 'corn', name: 'Corn - 1pcs', price: 25, image: corn },
      // Add more items as needed
    ],
    'Fresh Fruits': [
      { id: 'apple', name: 'Apples - 1kg', price: 20, image: 'path_to_image' },
      { id: 'banana', name: 'Bananas - 1kg', price: 50, image: 'path_to_image' },
      // Add more items as needed
    ],
    // Add more categories as needed
  };

function GroceryItemPage({ addToCart }) {
  const { itemName } = useParams();
  const items = itemDetails[itemName] || [];

  return (
    <div className="grocery-item-page">
      <h1 className="grocery-item-title">{itemName}</h1>
      <div className="grocery-item-list">
        {items.map(item => (
          <div key={item.id} className="grocery-item-card">
            <img src={item.image} alt={item.name} className="grocery-item-image" />
            <div className="grocery-item-info">
              <h3>{item.name}</h3>
              <p className="grocery-item-price">&#8377;{item.price.toFixed(2)}</p>
              <button className="grocery-item-add-to-cart-button" onClick={() => addToCart(item)}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryItemPage;
