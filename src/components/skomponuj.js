import React, {useState, useEffect} from 'react';
import Dodatki from '../dane';


function Skomponuj() {

  const [dodatki, setDodatki] = useState([]);

  useEffect(() => {

  }, []);     //[] dodaje sie po to zeby metoda byla wykonana tylko 1 raz


  return (
    <div className='skomponuj'>

      <h1>Skomponuj pizzę </h1>
      <h4>Cena: 0 zł</h4>
      <div>
        <img className={'wielkosc mala'} src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_mały'/>
        <img className={'wielkosc srednia'} src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_mały'/>
        <img className={'wielkosc duza'} src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_mały'/>
      </div>
      <div>
      <button>Dodaj</button>
      </div>

      <div className='dodatki'>
        {Dodatki.map((dodatek, index) => {  //pobieramy elementy z dane.json   dodatek tworzymy sami to jest kazdy element tablicy
          return (    //zwraca kazdy element z dane.json
            <div key={index} className='dodatekRzad'>
              <input type='checkbox'/>
              <img className='dodatek_ikonka' src={process.env.PUBLIC_URL + '/assets/' + dodatek.nazwa + '.png'}
                   alt={dodatek.nazwa}/>
              <p>{dodatek.nazwa}</p>
              {dodatek.koszt === 0 ? <p>Free</p> : <p>{(dodatek.koszt / 100).toFixed(2)}zł</p>}
            </div>    // /* kluczem jest index z map, poniewaz kazdy element z map ma swoj index ktory jest unikalny*
          )
        })}
      </div>

    </div>
  );
}

export default Skomponuj;
