import { useState } from 'react';

import './index.scss';

const DisplayCardButton = ({restaurant}) => {

  const [displayCard, setDisplayCard] = useState(false);

  return (
    <>
      <button 
        onClick={() => setDisplayCard(!displayCard)}
        className="button_display"
      >
        {restaurant.name}
      </button>
      <div className={`card ${displayCard ? "show" : ""}`}>
        <button 
          onClick={() => setDisplayCard(!displayCard)}
          className="button_close"
        >
          x
        </button>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.spec}</h3>
          <p>{restaurant.address}</p>
          <div>
            <ul>
              <li><img src="" alt="" />{restaurant.tags[0]}</li>
              <li><img src="" alt="" />{restaurant.tags[1]}</li>
              <li><img src="" alt="" />{restaurant.tags[2]}</li>
              <li><img src="" alt="" />{restaurant.tags[3]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`overlay ${displayCard ? "show" : ""}`}></div>
    </>
  );
};

export default DisplayCardButton;