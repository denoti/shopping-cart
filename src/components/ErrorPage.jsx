import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div>
      <h1>It seems you wandered of to the wrong page!</h1>
      <Link to='/'>Click HERE to go HOME!</Link>
    </div>
  );
}
