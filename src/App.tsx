import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/assets/icon-webpage.svg'} className="App-logo" alt="logo" />
        <p>
          Welcome to my new Webpage. Under construction.
        </p>
      </header>
    </div>
  );
}

export default App;
