const index = cartDetails.findIndex((item) => item.name === name);
cartDetails[index] = {
  ...cartDetails[index],
  quantity: cartDetails[index].quantity + 1,
};
