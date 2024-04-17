import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
// import './SectionProduct.css'; // Create this CSS file for styling


const SectionProduct = () => {
  const [products, setProducts] = useState([]);
  const {addToCart}=useCart()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.map(product => ({
          ...product,
          showDescription: false // Initially hide description
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionProduct;
