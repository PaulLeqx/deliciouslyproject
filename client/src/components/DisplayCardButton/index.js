import { useState, useEffect } from 'react';

import './index.scss';

const DisplayCardButton = ({restaurant}) => {

  const [displayCard, setDisplayCard] = useState(false);

  const [current, setCurrent] = useState(0);
  const length = restaurant.pics.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 4000)
  }, [current]);

  if (!Array.isArray(restaurant.pics) || restaurant.pics.length <= 0) {
    return null;
  }


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
        {/* Double map because of classnames and display none on slide div that affect slide_poisition div if in the same map */}
        <div className="carousel">
          {restaurant.pics.map((pic, index) => {
            return (
              <>
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img className="card_img" src={pic} alt="" />
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div className="slide_position">
          {restaurant.pics.map((pic, index) => {
            return (
              <p 
                className={index === current ? 'slide_position-active' : 'slide_position-inactive'}
                key={index}
              >
                &#9679;
              </p>
            );
          })}
        </div>
        <div>
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.spec}</h3>
          <p>{restaurant.address}</p>
          <div>
            <ul className="spec_list">
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