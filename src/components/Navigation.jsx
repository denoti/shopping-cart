/* eslint-disable react/no-unescaped-entities */
import '../styles/navigation.css';
import { Link } from 'react-router-dom';
const Navigation = (props) => {
  return (
    <div className='navigation'>
      <h1>Denoti's Shop</h1>
      <nav>
        <Link to='/home' onClick={props.setValue(true)}>
          Home
        </Link>

        <Link to='/shop' onClick={props.setValue(true)}>
          Shop
        </Link>

        <Link to='/cart' onClick={props.setValue(true)}>
          Cart
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
