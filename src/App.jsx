import './App.css';
import Navigation from './components/Navigation';
import Display from './components/Display';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Display>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        <Wrapper></Wrapper>
        
      </Display>
    </div>
  );
}

export default App;
