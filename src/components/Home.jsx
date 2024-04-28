import { Link } from 'react-router-dom';
import '../styles/home.css';
import Navigation from './Navigation';
export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <div className='home'>
        <h1>Denoti's Haven</h1>
        <p>Find the Latest and TRENDIEST apparel!</p>
        <p>We are the Best! We offer the Best! </p>
        <p>You'll definitely be the best!</p>
        <button>
          <Link to='/shop'>EXPLORE</Link>
        </button>
      </div>
    </div>
  );
}
