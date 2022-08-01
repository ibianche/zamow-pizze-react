import React, {useState, useEffect} from 'react';


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


  return (
    <div>
      <h1>Twoje zamówienie</h1>
      {zamowienie.map((pizza, index) => {
        return (
          <div key={index}>
            <h3>
              {index + 1}# {pizza.wielkosc}
            </h3>
          </div>
        )
      })}
      <p>---------------</p>
      <p>Do zapłaty: {(koszt / 100).toFixed(2)}zł</p>
    </div>
  );
}

export default Zamowienie;
