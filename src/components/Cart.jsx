import { useContext } from 'react';
import { CartContext } from '../context/Context';
import Navigation from './Navigation';
import CartWrapper from './CartWrapper';
export default function Cart() {
  const { cartDetails } = useContext(CartContext);
  let totalCost = 0;
  cartDetails.forEach((item) => {
    totalCost += item.amountTotal;
  });
  console.log(totalCost);
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
      </div>
      <div className='checkout'>
        <p>Total =</p>
        <span style={{ color: 'red' }} className='totalAmount'>
          ${totalCost}
        </span>
      </div>
    </div>
  );
}
