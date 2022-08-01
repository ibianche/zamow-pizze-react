import React, {useState} from 'react';
import './App.css';
import Zamowienie from './components/zamowienie';
import Skomponuj from './components/skomponuj';

function App() {

  const [pizza, setPizza] = useState(null);

  const otrzymajPizze = pizza => {
    setPizza(pizza);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Zamów pizzę </h1>
      </header>
      <div className='content'>
      <Skomponuj otrzymajPizze={otrzymajPizze}/>
      <Zamowienie nowaPizza={pizza}/>
      </div>
    </div>
  );
}

export default App;
