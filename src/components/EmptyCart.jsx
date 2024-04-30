import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <h1>Your Cart is empty!</h1>
      <Link to='/shop'>Click here to SHOP!</Link>
    </>
  );
};

export default EmptyCart;
