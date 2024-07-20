// product images for search
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';

// Vegitables 
import tomato from './images/GroceryImg/veg/tomato.png'
import potato from './images/GroceryImg/veg/potato.png'
import onion from './images/GroceryImg/veg/onion.png'
import carrot from './images/GroceryImg/veg/carrot.png'
import cauliflower from './images/GroceryImg/veg/cauliflower.png'
import capsicum from './images/GroceryImg/veg/capsicum.png'
import cucumber from './images/GroceryImg/veg/cucumber.png'
import ginger from './images/GroceryImg/veg/ginger.png'
import ladiesfinger from './images/GroceryImg/veg/ladiesfinger.png'
import garlic from './images/GroceryImg/veg/garlic.png'
import corianderleave from './images/GroceryImg/veg/corianderleave.png'
import corn from './images/GroceryImg/veg/corn.png'


// end of it
// Sample products, replace with actual products for each category
export const groceryProducts = [
    { id: 'tomato', name: 'Tomatoes - 1kg', price: 40, mrp:50,image: tomato },
    { id: 'potato', name: 'Potatoes - 1kg', price: 24,mrp:30, image: potato },
    { id: 'onion', name: 'Onion - 1kg', price: 60,mrp:70, image: onion },
    { id: 'carrot', name: 'Carrot - 1kg', price: 100,mrp:150, image: carrot },
    { id: 'cauliflower', name: 'Cauliflower - 1pcs', price: 20,mrp:30, image:cauliflower },
    { id: 'capsicum', name: 'Capsicum - 1kg', price: 50,mrp:60, image: capsicum },
    { id: 'cucumber', name: 'Cucumber - 500g', price: 20,mrp:30, image: cucumber },
    { id: 'ginger', name: 'Ginger - 250g', price: 40,mrp:50, image: ginger },
    { id: 'ladiesfinger', name: 'Ladies Finger - 500g', price: 30,mrp:40, image: ladiesfinger },
    { id: 'garlic', name: 'Garlic - 1kg', price: 80,mrp:100, image: garlic },
    { id: 'corianderleave', name: 'Coriander Leave - 250g', price: 20,mrp:25, image: corianderleave },
    { id: 'corn', name: 'Corn - 1pcs', price: 25,mrp:30, image: corn },
];

export const mobileProducts = [
  { id: 'iPhone 12', name: 'iPhone 12', description: 'Apple iPhone 12', image: product3, price: 999, mrp: 1099 },
  { id:'Samsung Galaxy S21', name: 'Samsung Galaxy S21', description: 'Samsung Galaxy S21', image: product4, price: 799, mrp: 899 },
];

export const appliancesProducts = [
  { id:'Refrigerator', name: 'Refrigerator', description: 'Double Door Refrigerator', image: product1, price: 500, mrp: 600 },
  { id: 'Microwave Oven', name: 'Microwave Oven', description: 'Microwave Oven', image: product2, price: 150, mrp: 200 },
];

export const fashionProducts = [
  { id: 'T-Shirt', name: 'T-Shirt', description: 'Cotton T-Shirt', image: product3, price: 20, mrp: 30 },
  { id: 'Jeans', name: 'Jeans', description: 'Denim Jeans', image: product4, price: 40, mrp: 50 },
];

export const electronicsProducts = [
  { id: 'Laptop', name: 'Laptop', description: 'Gaming Laptop', image: product1, price: 1500, mrp: 1700 },
  { id: 'Headphones', name: 'Headphones', description: 'Noise Cancelling Headphones', image: product2, price: 200, mrp: 250 },
];

export const allProducts = [
  ...groceryProducts,
  ...mobileProducts,
  ...appliancesProducts,
  ...fashionProducts,
  ...electronicsProducts,
];
