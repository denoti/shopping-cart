import { createContext, useState, useCallback } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDetails, setCartDetails] = useState([]);
  const addToCart = useCallback((item) => {
    setCartDetails(())
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
