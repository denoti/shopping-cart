import { useContext } from 'react';
import { CartContext } from '../context/Context';
import Navigation from './Navigation';
import CartWrapper from './CartWrapper';
import EmptyCart from './EmptyCart';
export default function Cart() {
  const { cartDetails } = useContext(CartContext);
  let totalCost = 0;
  cartDetails.forEach((item) => {
    totalCost += item.amountTotal;
  });

  if (cartDetails.length === 0) {
    return (
      <>
        <Navigation />
        <EmptyCart />
      </>
    );
  } else {
    return (
      <div>
        <Navigation></Navigation>
        <div>
          {cartDetails.map((item, index) => {
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
          })}

          <div className='checkout'>
            <p>Total =</p>
            <span style={{ color: 'red' }} className='totalAmount'>
              ${totalCost.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
