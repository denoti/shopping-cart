import { createContext, useState, useCallback } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDetails, setCartDetails] = useState([]);
  const addToCart = useCallback((item) => {
    setCartDetails((prevCartDetails) => {
      const filteredItems = prevCartDetails.filter(
        (existingItem) => existingItem.name !== item.name
      );
      return [...filteredItems, item];
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
