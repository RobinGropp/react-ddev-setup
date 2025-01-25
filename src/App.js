import logo from './logo.svg';
import WelcomeComponent from '../src/components/WelcomeComponent'; // Importiere die Komponente

import './App.css';

function App() {
  return (
    <div className="App">
      <WelcomeComponent />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
