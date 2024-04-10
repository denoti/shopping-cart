import '../styles/display.css';
const Display = (props) => {
  return (
    <div>
      <p>Items</p>
      <div className='display'>{props.children}</div>
    </div>
  );
};

export default Display;
