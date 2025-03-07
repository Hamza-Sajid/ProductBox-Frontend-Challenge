// React imports
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// App imports
import { CartItemInterface } from '../pages/types';
import { CartContextType } from './types';

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { }
});
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // To store the cart items globally
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);
  /**
   * Function to add a new product to cart
   * @param item 
   */
  const addToCart = (item: CartItemInterface) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    let updatedCart;

    if (existingItemIndex >= 0) {
      // Update quantity
      updatedCart = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      );
    } else {
      // Add new item to the cart
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart); // updating state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // updating browser storage
  };

  /**
   * Function to remove a product from cart state
   * @param id 
   */
  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
