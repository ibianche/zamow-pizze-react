import React from 'react';
import './App.css';
import Zamowienie from './components/zamowienie';
import Skomponuj from './components/skomponuj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zamów pizzę </h1>
        <Skomponuj/>
        <Zamowienie/>
      </header>
    </div>
  );
}

export default App;
