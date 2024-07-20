// Vegitables 
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
} from './images.js'


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

    { id: 'apple', name: 'Apples - 1kg', price: 120, image: apple },
      { id: 'banana', name: 'Bananas - 1kg', price: 50, image: banana },
      { id: 'avacado', name: 'Avacado - 1kg', price: 80, image: avacado },
      { id: 'cherry', name: 'Cherry - 500g', price: 100, image: cherry  },
      { id: 'grape', name: 'Grape - 1kg', price: 40, image: grape  },
      { id: 'guava', name: 'Guava - 500g', price: 40, image: guava },
      { id: 'mango', name: 'Mango - 1kg', price: 90, image: mango },
      { id: 'orange', name: 'Orange - 1kg', price: 80, image: orange  },
      { id: 'pineapple', name: 'Pineapple - 1', price: 60, image: pineapple },
      { id: 'pomegranate', name: 'pomegranate - 1kg', price: 100, image: pomegranate },
      { id: 'watermelon', name: 'watermelon - 1', price: 40, image: watermelon  },
      { id: 'jackfruit', name: 'jackfruit - 1', price: 50, image: jackfruit },
];

export const mobileProducts = [
  { id: 'iPhone 14', name: 'iPhone 14', description: 'Apple iPhone 14', image: iphone14pro, price: 100000, mrp: 120000 },
  { id:'Samsung Galaxy S21', name: 'Samsung Galaxy S21', description: 'Samsung Galaxy S21', image: Samsungs23, price: 700000, mrp: 899000 },
];

export const appliancesProducts = [
  { id:'Refrigerator', name: 'Refrigerator', description: 'Double Door Refrigerator', image: Lgfridge, price: 50000, mrp: 60000 },
  { id: 'Washing Machine', name: 'Washing Machine', description: 'Washing Machine', image: washingmech, price: 15000, mrp: 20000 },
  { id: 'Home Combo', name: 'Home Combo',mrp: '100000', price: 80000, image: AppCombo },
  { id: 'Samsung Fridge', name: 'Samsung Fridge', mrp: '100000', price: 80000, image: Sfridge },
  { id: 'Samsung Washing', name: 'Samsung Washing', mrp: '20000', price: 16000, image: Swashing },
  { id: 'Samsung tv', name: 'Samsung tv', mrp: '300000', price: 240000, image: Stv },
  { id: 'Samsung vacuum', name: 'Samsung Vacuum', mrp: '400', price: 320, image: Svacuum },
  
];

export const fashionProducts = [
  { id: 'T-Shirt', name: 'T-Shirt', description: 'Cotton T-Shirt', image: Tshirt, price: 20, mrp: 30 },
  { id: 'Shirt', name: 'Shirt', description: 'Shirt', image: shirt, price: 40, mrp: 50 },
];

export const electronicsProducts = [
  { id: 'Laptop', name: 'Laptop', description: 'Gaming Laptop', image: macbookair ,price : 1500, mrp: 1700 },
  { id: 'Headphones', name: 'Headphones', description: 'Noise Cancelling Headphones', image: SonyHeadphone, price: 200, mrp: 250 },
  { id: 'Designer lap', name: 'Designer Lap',mrp: '100000', price: 80000, image: Designlap },
  { id: 'macbookair', name: 'Macbook AIr',mrp: '100000', price: 80000, image: macbookair },
  { id: 'tufgaming', name: 'Tuf Gaming',mrp: '100000', price: 80000, image: tufgaming},
];

export const allProducts = [
  ...groceryProducts,
  ...mobileProducts,
  ...appliancesProducts,
  ...fashionProducts,
  ...electronicsProducts,
];
