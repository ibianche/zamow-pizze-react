import React, {useState, useEffect} from 'react';
import Dodatki from '../dane';


function Skomponuj() {

  const [dodatki, setDodatki] = useState([]);

  useEffect(() => {

  }, []);     //[] dodaje sie po to zeby metoda byla wykonana tylko 1 raz


  return (
    <div className='dodatki'>
      <h1>Skomponuj pizzę </h1>
      {Dodatki.map((dodatek, index) => {  //pobieramy elementy z dane.json   dodatek tworzymy sami to jest kazdy element tablicy
        return (    //zwraca kazdy element z dane.json
          <div key={index} className='dodatekRzad'>
            <input type='checkbox'/>
            <img className='dodatek_ikonka' src={process.env.PUBLIC_URL + '/assets/' + dodatek.nazwa + '.png'}
                 alt={dodatek.nazwa}/>
            <p>{dodatek.nazwa}</p>
            { dodatek.koszt === 0 ? <p>Free</p> : <p>{(dodatek.koszt / 100).toFixed(2)}zł</p>}
          </div>    // /* kluczem jest index z map, poniewaz kazdy element z map ma swoj index ktory jest unikalny*
        )
      })}
    </div>
  );
}

export default Skomponuj;
