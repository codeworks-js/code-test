import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <React.Fragment>
        <CssBaseline />
        {/* The rest of your application */}

        <div className="App">
          <header className="App-header">
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
          </header>
        </div>
      </React.Fragment>
  );
}

export default App;
