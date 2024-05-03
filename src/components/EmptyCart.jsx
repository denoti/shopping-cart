import { Link } from 'react-router-dom';
import '../styles/emptyCart.css';
const EmptyCart = () => {
  return (
    <div className='emptycart'>
      <h1>Your Cart is empty!</h1>
      <Link to='/shop'>Click here to SHOP!</Link>
    </div>
  );
};

export default EmptyCart;
