import React, {useState, useEffect} from 'react';
import Dodatki from '../dane';


function Skomponuj() {

  const [ dodatki, setDodatki ] = useState([]);

  useEffect( () => {

    }, []);     //[] dodaje sie po to zeby metoda byla wykonana tylko 1 raz


  return (
    <div>
      <h1>Skomponuj pizzę </h1>
      { Dodatki.map((dodatek) => {  //pobieramy elementy z dane.json   dodatek tworzymi sami to jest kazdy element tablicy
        return(
          <p>{dodatek.nazwa}</p>
        )
      })}
    </div>
  );
}

export default Skomponuj;
