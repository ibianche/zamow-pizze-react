import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Cena from './cena';


function Zamowienie(props) {

  const [koszt, setKoszt] = useState(0);
  const [zamowienie, setZamowienie] = useState([]);

  useEffect(() => {                              // useEffect bedzie wywołany w momencie kiedy dostaniemy nowaPizza
    if (props.nowaPizza) {
      setZamowienie(zam => [...zam, props.nowaPizza]);              // ... zamiast array.push (dodanie wszystkich elementow z tablicy
    }

  }, [props.nowaPizza]);                        //nowaPizza bierzemy z App.js

  useEffect(() => {
    let kosztWszystkich = zamowienie.reduce((suma, pizza) => suma + pizza.koszt, 0);
    setKoszt(kosztWszystkich);
  }, [zamowienie]);            //useEffect wykona sie kiedy zmienimy zamowienie


  const usunPizze = indx => {
    let zam = zamowienie.filter((pizza, index) => index !== indx);
    setZamowienie(zam);
  };

  // const zaplac = () => {
  //   props.history.push('/koszyk');
  // };


  return (
    <div style={{'flexGrow': 1}}>
      <h1>Twoje zamówienie</h1>
      {zamowienie.map((pizza, index) => {
        return (
          <div key={index} className='zamowienieRzad'>
            <h3>
              {index + 1}# {pizza.wielkosc} pizza
              ({pizza.dodatki.length} <IleDodatkow ilosc={pizza.dodatki.length}/>)
              &nbsp; | &nbsp;
              {/*{(pizza.koszt / 100).toFixed(2)}zł*/}
              <Cena cena={pizza.koszt}/>
            </h3>
            <h3 onClick={() => usunPizze(index)}>X</h3>
          </div>
        )
      })}
      <p>---------------</p>
      <p>Do zapłaty: <Cena cena={koszt}/></p>
      <button>Zapłać</button>
    </div>
  );
}


function IleDodatkow({ilosc}) {
  if (ilosc === 1) {
    return 'dodatek';
  } else if (ilosc > 1 && ilosc < 5) {
    return 'dodatki';
  }
  return 'dodatków';
}

export default Zamowienie;
