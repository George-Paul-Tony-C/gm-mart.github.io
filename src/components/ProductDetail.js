import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productCategories } from './ProductCards';
import './ProductDetail.css';
import Swal from 'sweetalert2';

const ProductDetail = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Find the product based on the ID
  const product = productCategories.flatMap(category => category.products).find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Product added to cart!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="mrp">MRP: ${product.mrp}</p>
      <p className="price">Price: ${product.price}</p>
      <button className="btn" onClick={() => {addToCart(product) ; handleBuyNow()}}>Buy Now</button>
      <button className="btn" onClick={handleBackToProducts} style={{ marginTop: '10px' }}>Back to Products</button>
    </div>
  );
};

export default ProductDetail;
