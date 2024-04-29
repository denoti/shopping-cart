import { createContext, useState, useCallback } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDetails, setCartDetails] = useState([]);
  const addToCart = useCallback((item) => {
    setCartDetails((prevCartDetails) => {
      const index = prevCartDetails.findIndex(
        (existingItem) => existingItem.name === item.name
      );
      console.log(index);
      const updatedCart = [...prevCartDetails];
      if (index === -1) {
        updatedCart.push(item);
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + item.quantity,
        };
      }
      return updatedCart;
    });
  }, []);

  const contextValue = {
    cartDetails,
    addToCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
export { CartContext };
export default CartContextProvider;
