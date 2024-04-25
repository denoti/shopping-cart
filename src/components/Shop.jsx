import '../styles/shop.css';
import Wrapper from './Wrapper'
const Shop = (props) => {
  return (
    <div className="box">
      <p>Items</p>
      <div className='display'>{props.children}</div>
      <Wrapper />
    </div>
  );
};

export default Shop;
