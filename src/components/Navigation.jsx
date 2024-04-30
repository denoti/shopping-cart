/* eslint-disable react/no-unescaped-entities */
import '../styles/navigation.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Context';

const Navigation = () => {
  const { cartDetails } = useContext(CartContext);
  let totalQuantity = 0;
  cartDetails.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return (
    <div className='navigation'>
      <h1>Denoti's Shop</h1>
      <nav>
        <Link to='/'>Home</Link>

        <Link to='/shop'>Shop</Link>

        <Link to='/cart'>
          Cart
          <span className='span'>{totalQuantity}</span>
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
