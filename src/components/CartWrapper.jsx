import '../styles/CartWrapper.css';

const CartWrapper = () => {
  return (
    <div className='cart'>
      <div className='cartwrapper'>
        <div className='imageItem'>
          <img
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            alt=''
          />
          <h3>A very good Bag</h3>
        </div>
      </div>
      <div className='buttonControls'>
        <button>-</button>
        <h2>10</h2>
        <button>+</button>
      </div>
      <div className='priceDetails'>
        <p>price: $1000</p>
        <h4>Subtotal: $8000</h4>
      </div>
    </div>
  );
};

export default CartWrapper;
