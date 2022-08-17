import logo from './logo.svg';
import './App.css';
import { clockComponent } from './components/clockComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockComponent />
      </header>
    </div>
  );
}

export default App;
