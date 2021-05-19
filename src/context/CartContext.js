import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);

  const addToCart = (item) => {
    const indexToUpdate = cart.findIndex((itemInCart) => {
      return itemInCart.id === item.id;
    });

    if(indexToUpdate < 0) {
      setCart([...cart, item]);
    } else {
      const newQuantity = cart[indexToUpdate].quantity + item.quantity;
      const newCart = [
        ...cart.slice(0,indexToUpdate),
        {...cart[indexToUpdate], quantity: newQuantity},
        ...cart.slice(indexToUpdate+1)
      ];
      setCart(newCart);
    }
  }

  const removeFromCart = (itemId) => {
    const indexToUpdate = cart.findIndex((itemInCart) => {
      return itemInCart.id === itemId;
    });

    if(indexToUpdate >= 0) {
      let newCart = cart.filter(item => item.id !== itemId);
      const newQuantity = cart[indexToUpdate].quantity - 1;
      if (newQuantity) {
        newCart = [
          ...cart.slice(0,indexToUpdate),
          {...cart[indexToUpdate], quantity: newQuantity},
          ...cart.slice(indexToUpdate+1)
        ];
      }
      setCart(newCart);
    }
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (itemId) => cart.some((item) => item.id === itemId);

  useEffect(() => {
    const getTotalQuantity = () => {
      const reducer = (accumulator, item) => {
        return { quantity: accumulator.quantity + item.quantity };
      }

      const total = cart.reduce(reducer, {quantity: 0});

      return total.quantity;
    }

    const getTotalCost = () => {
      const reducer = (accumulator, item) => {
        return { price: accumulator.price + item.price*item.quantity };
      }

      const total = cart.reduce(reducer, {price: 0});

      return total.price;
    }

    setQuantity(getTotalQuantity());
    setCost(getTotalCost());
  }, [cart]);

  return (
    <CartContext.Provider
      value={{cart, addToCart, removeFromCart, clear, isInCart, quantity, cost}}
    >
      {children}
    </CartContext.Provider>
  );
}
