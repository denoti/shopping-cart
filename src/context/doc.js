const index = cartDetails.findIndex((item) => item.name === name);
cartDetails[index] = {
  ...cartDetails[index],
  quantity: cartDetails[index].quantity + 1,
};


{
  if (cartDetails[index].quantity && cartDetails.length > 0) {
    cartDetails.map((item, index) => {
      {
        return (
          <CartWrapper
            key={index}
            image={cartDetails[index].image}
            name={cartDetails[index].name}
            amount={cartDetails[index].amount}
            quantity={cartDetails[index].quantity}
            amountTotal={cartDetails[index].amountTotal}
          />
        );
      }
    });
  }
}


if (updatedCart[index].quantity)