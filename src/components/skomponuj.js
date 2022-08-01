import React, {useState, useEffect} from 'react';
import Dodatki from '../dane';


function Skomponuj() {

  const [dodatki, setDodatki] = useState([]);
  const [koszt, setKoszt] = useState(0);
  const [baza, setBaza] = useState(700);

  useEffect(() => {
    Dodatki.map(dodatek => {
      dodatek.checked = dodatek.koszt === 0 ? true : false;
      return dodatek
    });
    setDodatki(Dodatki);

  }, []);     //[] dodaje sie po to zeby metoda byla wykonana tylko 1 raz



  useEffect( () =>{                           //wykonywana kiedy zmeni sie baza lub dodatki
    setKoszt(dodatki.reduce( (suma, dodatek) => {
      return dodatek.checked ? suma + dodatek.koszt : suma;
    }, baza))
  }, [baza, dodatki]);

  const dodatekZmiana = (dodatek) => {        //funkcja do klikania dodatkow
    setDodatki(
      dodatki.map(el => {
        if (el.nazwa === dodatek.nazwa) {
          el.checked = !el.checked;
        }
        return el;
      })
    );

  };

  const zmienRozmiar = (rozmiar) => {
    setBaza(rozmiar)
  };


  return (
    <div className='skomponuj'>

      <h1>Skomponuj pizzę </h1>
      <h4>Cena: {(koszt /100).toFixed(2)} zł</h4>
      <div>
        <img className={'wielkosc mala ' + (baza === 600 ? 'zaznaczone': '')} onClick={() => zmienRozmiar(600)}
             src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_mały'/>
        <img className={'wielkosc srednia ' + (baza === 700 ? 'zaznaczone': '')} onClick={() => zmienRozmiar(700)}
             src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_sredni'/>
        <img className={'wielkosc duza ' + (baza === 800 ? 'zaznaczone': '')} onClick={() => zmienRozmiar(800)}
             src={process.env.PUBLIC_URL + '/assets/size.png'} alt='rozmiar_duzy'/>
      </div>
      <div>
        <button>Dodaj</button>
      </div>

      <div className='dodatki'>
        {dodatki.map((dodatek, index) => {  //pobieramy elementy z dane.json   dodatek tworzymy sami to jest kazdy element tablicy
          return (    //zwraca kazdy element z dane.json
            <div key={index} className='dodatekRzad'>
              <input type='checkbox' checked={dodatek.checked} onChange={() => dodatekZmiana(dodatek)}/>
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
