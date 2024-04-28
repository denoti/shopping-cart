/* eslint-disable react/no-unescaped-entities */
import '../styles/navigation.css';
import { Link } from 'react-router-dom';
const Navigation = () => {

  return (
    <div className='navigation'>
      <h1>Denoti's Shop</h1>
      <nav>
        <Link to='/'>
          Home
        </Link>

        <Link to='/shop'>
          Shop
        </Link>

        <Link to='/cart'>
          Cart
          <span className='span'> 10</span>
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
