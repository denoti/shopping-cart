
import '../styles/wrapper.css';
import photo from '../assets/images/7.jpg';
import Button from './Button';
const Wrapper = (img, p, code) => {
  return (
    <div className='wrapper'>
      <div className='photo-details'>
        <img src={photo} alt='id' />
        <p>Name of item</p>
      </div>
      <div className='purchase-details'>
        <p>code</p>
        <Button></Button>
      </div>
    </div>
  );
};

export default Wrapper;
