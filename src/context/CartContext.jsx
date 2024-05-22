import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]);

  // Function to add item to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find(sanjeev=>sanjeev.id===item.id)
    if (isItemInCart){
      setCartItems(cartItems.map(sanjeev=>sanjeev.id===item.id ? {...sanjeev,quantity:sanjeev.quantity+1}:sanjeev))
    }
    else{
      setCartItems([...cartItems,{...item,quantity:1}])
    }
  };
  const deleteFromCart = (item) => {
    const isItemInCart = cartItems.find(sanjeev=>sanjeev.id===item.id)
    if (isItemInCart){
      setCartItems(cartItems.map(sanjeev=>sanjeev.id===item.id ? {...sanjeev,quantity:sanjeev.quantity-1}:sanjeev))
    }
    // else{
    //   setCartItems([...cartItems,{...item,quantity:1}])
    // }
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
    <CartContext.Provider value={{ cartItems, addToCart,setCartItems,removeFromCartById,clearCart,deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
