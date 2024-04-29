import { useState, useContext } from 'react';
import '../styles/wrapper.css';
import { CartContext } from '../context/Context';
import Button from './Button';

const Wrapper = ({ img, price, title }) => {
  const [inputValue, setInputValue] = useState(0);
  const { addToCart } = useContext(CartContext);

  const createItemObject = () => ({
    image: img,
    name: title,
    amount: price,
    quantity: inputValue,
    amountTotal: price * inputValue,
  });

  const handleAddToCart = () => {
    if (inputValue > 0) {
      addToCart(createItemObject());
    } else {
      alert('Please select at least one item.');
    }
  };
  function increment() {
    setInputValue(inputValue + 1);
  }
  function decrement() {
    setInputValue((val) => Math.max(0, val - 1));
  }
  return (
    <div className='wrapper'>
      <div className='photo-details'>
        <img src={img} alt={title} />
        <p>{title}</p>
      </div>
      <div className='input-details'>
        <button onClick={decrement}>-</button>
        <input
          type='number'
          value={inputValue}
          min={1}
          onChange={(e) => {
            setInputValue(Number(e.target.value));
          }}
        />
        <button onClick={increment}>+</button>
      </div>
      <div className='purchase-details'>
        <p>${price}</p>
        <Button
          func={() => {
            handleAddToCart();
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Wrapper;
