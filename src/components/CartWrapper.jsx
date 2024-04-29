import '../styles/CartWrapper.css';

const CartWrapper = ({ image, name, amount, quantity, amountTotal }) => {
  return (
    <div className='cart'>
      <div className='cartwrapper'>
        <div className='imageItem'>
          <img
            src={image}
            alt=''
          />
          <h3>{name}</h3>
        </div>
      </div>
      <div className='buttonControls'>
        <button>-</button>
        <h2>{quantity}</h2>
        <button>+</button>
      </div>
      <div className='priceDetails'>
        <p>price: ${amount}</p>
        <h4>Subtotal: ${amountTotal}</h4>
      </div>
    </div>
  );
};

export default CartWrapper;
