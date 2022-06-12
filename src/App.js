import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter by={1}/>
        <Counter by={2}/>
        <Counter by={5}/>
        <Counter by={10}/>
        <Counter by={50}/>
        <Counter by={100}/>
      </header>
    </div>
  );
}

export default App;
