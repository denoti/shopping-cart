import { Link } from 'react-router-dom';
import '../styles/errorPage.css';
export default function ErrorPage() {
  return (
    <div className='error'>
      <h1>It seems you wandered of to the wrong page!</h1>
      <Link to='/'>Click HERE to go HOME!</Link>
    </div>
  );
}
