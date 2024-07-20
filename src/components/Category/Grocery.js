import React from 'react';
import { Link } from 'react-router-dom';
import './Grocery.css';
import bannerImage from '../images/GroceryImg/topimg.png';
import veg from '../images/GroceryImg/veg.png';
import fruit from '../images/GroceryImg/fruit.png';
import cuts from '../images/GroceryImg/cut.png';
import herbs from '../images/GroceryImg/herb.png';
import atta from '../images/GroceryImg/atta.png';
import rice from '../images/GroceryImg/rice.png';
import dals from '../images/GroceryImg/dals.png';
import oil from '../images/GroceryImg/oil.png';
import dryfruit from '../images/GroceryImg/dryfruit.png';
import salt from '../images/GroceryImg/salt.png';
import healthdrink from '../images/GroceryImg/healthdrink.png';
import tea from '../images/GroceryImg/tea.png';
import flavormilk from '../images/GroceryImg/flavormilk.png';
import juice from '../images/GroceryImg/juice.png';
import energydrink from '../images/GroceryImg/energydrink.png';
import softdrink from '../images/GroceryImg/softdrink.png';
import chaiSnack from '../images/GroceryImg/chaiSnack.png';
import morningstarter from '../images/GroceryImg/morningstarter.png';
import pasta from '../images/GroceryImg/pasta.png';
import sweet from '../images/GroceryImg/sweet.png';
import Cleaner from '../images/GroceryImg/cleaner.png';
import Detergent from '../images/GroceryImg/detergent.png';
import garbagebag from '../images/GroceryImg/garbagebag.png';
import Freshener from '../images/GroceryImg/freshner.png';

const categories = [
  {
    id: 1,
    title: 'Fruits and Vegetables',
    items: [
      { id: 'Fresh Vegetables', name: 'Fresh Vegetables', discount: '27%', image: veg },
      { id: 'Fresh Fruits', name: 'Fresh Fruits', discount: '27%', image: fruit },
      { id: 'Cuts & Exotics', name: 'Cuts & Exotics', discount: '27%', image: cuts },
      { id: 'Herbs & Seasonings', name: 'Herbs & Seasonings', discount: '27%', image: herbs },
    ],
  },
  {
    id: 2,
    title: 'Your Daily Staples',
    items: [
      { id: 'Atta & Flour', name: 'Atta & Flour', discount: '27%', image: atta },
      { id: 'Rice & Rice Products', name: 'Rice & Rice Products', discount: '27%', image: rice },
      { id: 'Dals & Pulses', name: 'Dals & Pulses', discount: '27%', image: dals },
      { id: 'Cooking Oils & Ghee', name: 'Cooking Oils & Ghee', discount: '27%', image: oil },
      { id:'Dry Fruits', name: 'Dry Fruits', discount: '27%', image: dryfruit },
      { id: 'Salt, Sugar & Jaggery', name: 'Salt, Sugar & Jaggery', discount: '27%', image: salt },
    ],
  },
  {
    id: 3,
    title: 'Beverages',
    items: [
      { id: 'Health Drinks & Supplements', name: 'Health Drinks & Supplements', discount: '27%', image: healthdrink },
      { id: 'Tea & Coffee', name: 'Tea & Coffee', discount: '27%', image: tea },
      { id: 'Flavoured & Soya Milk', name: 'Flavoured & Soya Milk', discount: '27%', image: flavormilk },
      { id: 'Juices', name: 'Juices', discount: '27%', image: juice },
      { id: 'Energy Drinks', name: 'Energy Drinks', discount: '27%', image: energydrink },
      { id: 'Soft Drinks', name: 'Soft Drinks', discount: '27%', image: softdrink },
    ],
  },
  {
    id: 4,
    title: 'Snacks Store',
    items: [
      { id: 'Chai Time Snack', name: 'Chai Time Snack', discount: '27%', image: chaiSnack },
      { id: 'Morning Starters', name: 'Morning Starters', discount: '27%', image: morningstarter },
      { id: 'Pasta, Sauces & More', name: 'Pasta, Sauces & More', discount: '27%', image: pasta },
      { id: 'Sweet Cravings', name: 'Sweet Cravings', discount: '27%', image: sweet },
    ],
  },
  {
    id: 5,
    title: 'Cleaning & Household',
    items: [
      { id:'Cleaners & Disinfectants', name: 'Cleaners & Disinfectants', discount: '27%', image: Cleaner },
      { id: 'Detergents & Fabric Care', name: 'Detergents & Fabric Care', discount: '27%', image: Detergent },
      { id: 'Disposables & Garbage Bags', name: 'Disposables & Garbage Bags', discount: '27%', image: garbagebag },
      { id: 'Fresheners & Repellents', name: 'Fresheners & Repellents', discount: '27%', image: Freshener },
    ],
  },
];

function Grocery() {
  return (
    <div className="grocery-page">
      <img src={bannerImage} alt="Banner" className="grocery-banner" />
      {categories.map(category => (
        <div key={category.id} className="grocery-category-section">
          <h2>{category.title}</h2>
          <div className="grocery-category-items">
            {category.items.map(item => (
              <Link to={`/grocery/${item.name}`} key={item.id} className="grocery-category-card">
                <img src={item.image} alt={item.name} className="grocery-category-image" />
                <div className="grocery-category-info">
                  <h3>{item.name}</h3>
                  <p>Min {item.discount} OFF</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grocery;
