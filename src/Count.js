import React, { useState } from 'react';
import './count.css';

function Count() {
    const [compteur, setCompteur] = useState(0);

    //incrementation du compteur
    const incrementCompteur = ()=>{
        setCompteur(compteur + 1 );
    }

    //decrementation du compteur
    const decrementcompteur = ()=>{
        setCompteur(compteur - 1);
    }

    //comparaison du compteur a 0
    const getCountStyle = () => {
        if (compteur === 0) {
          return 'null'; 
        } else if (compteur > 0) {
          return 'positif'; 
        } else {
          return 'negatif';
        }
      };

  return (
    <div className="container">
    <div className="ellipse">
      <p className={`count ${getCountStyle()}`}>{compteur}</p>
    </div>
    <div className="controls">
      <div className="button moins" onClick={decrementcompteur}>
        <p className="signe">-</p>
      </div>
      <div className="button plus" onClick={incrementCompteur}>
        <p className="signe">+</p>
      </div>
    </div>
  </div>
  

  );
}

export default Count;
