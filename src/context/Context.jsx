import { createContext, useState, useCallback } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartDetails, setCartDetails] = useState([]);

  const handleQuantity = useCallback(
    (e, name, cart) => {
      setCartDetails(() => {
        const index = cartDetails.findIndex((item) => item.name === name);
        const updatedCart = [...cart];
        if (e === '+') {
          updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + 1,
          };
        } else {
          if (updatedCart[index].quantity) {
            updatedCart[index] = {
              ...updatedCart[index],
              quantity: updatedCart[index].quantity - 1,
            };
          }
        }
        return updatedCart;
      });
    },
    [cartDetails]
  );

  const addToCart = useCallback((item) => {
    setCartDetails((prevCartDetails) => {
      const index = prevCartDetails.findIndex(
        (existingItem) => existingItem.name === item.name
      );
      const updatedCart = [...prevCartDetails];
      if (index === -1) {
        updatedCart.push(item);
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + item.quantity,
          amountTotal:
            updatedCart[index].amountTotal +
            updatedCart[index].amount * item.quantity,
        };
      }
      return updatedCart;
    });
  }, []);

  const contextValue = {
    cartDetails,
    addToCart,
    handleQuantity,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
export { CartContext };
export default CartContextProvider;
