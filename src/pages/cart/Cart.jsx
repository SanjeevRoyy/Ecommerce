import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext'
import Navbar from '../../components/Navbar';


const Cart = () => {
  const { setCartItems,cartItems,removeFromCartById,clearCart,addToCart,deleteFromCart } = useCart();

  
  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    
  },[cartItems])
  
  useEffect(()=>{
    const cartItems = localStorage.getItem("cartItems")
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
      
    }
  },[])
  console.log(cartItems)


  const handleDeleteItem = (id) => {
    removeFromCartById(id);
  };

 const handleDeleteAll = () => {
    clearCart();
  };


  return (
    <>
    {/* <Navbar/> */}
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className='one'>
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">  
                  <h3>{item.title}</h3>
                  <h2>{item.quantity}</h2>
                  <div className='divbtn' >
                  <button onClick={()=>addToCart(item)}>+</button>
                  <button onClick={()=>deleteFromCart(item)}>-</button>
                  </div>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </div>

            </li>

          ))}
        </ul>

      )}
      <button onClick={handleDeleteAll}>Delete All </button>
    </div>
    </>
  );
};

export default Cart;
