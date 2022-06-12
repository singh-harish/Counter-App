import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
