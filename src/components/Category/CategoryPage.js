import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const components = {
  mobiles: lazy(() => import('./Mobiles')),
  appliances: lazy(() => import('./Appliances')),
  electronics: lazy(() => import('./Electronics')),
  fashion: lazy(() => import('./Fashion')),
  grocery: lazy(() => import('./Grocery')),
};

function CategoryPage({ addToCart }) {
  const { name } = useParams();
  const Component = components[name];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component addToCart={addToCart} /> : <div>Category not found</div>}
    </Suspense>
  );
}

export default CategoryPage;
