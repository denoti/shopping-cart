import { useContext } from 'react';
import { CartContext } from '../context/Context';
import Navigation from './Navigation';
import CartWrapper from './CartWrapper';
export default function Cart() {
  const { cartDetails } = useContext(CartContext);
  console.log(cartDetails);
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <CartWrapper></CartWrapper>
        <CartWrapper></CartWrapper>
        <CartWrapper></CartWrapper>
      </div>
      <div className='checkout'>
        <p>Total</p> <span className='totalAmount'>$1000</span>
      </div>
    </div>
  );
}
