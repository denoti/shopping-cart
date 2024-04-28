import '../styles/button.css';
export default function Button({ func }) {
  return <button onClick={func}>Add to cart</button>;
}
