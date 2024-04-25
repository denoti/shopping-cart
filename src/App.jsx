import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import {useState} from 'react';
import Home from './components/Home';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className='app'>
      <Navigation setValue={setValue}></Navigation>
      {value === false ? <Home /> : <Outlet />}
    </div>
  );
}

export default App;
