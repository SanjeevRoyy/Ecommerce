import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

//   const removeFromCart = (index) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems.splice(index, 1);
//     setCartItems(updatedCartItems);
//   };
  const removeFromCartById = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };


  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart,setCartItems,removeFromCartById,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
