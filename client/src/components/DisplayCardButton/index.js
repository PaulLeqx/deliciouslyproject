import { useState, useEffect } from 'react';

import alarm from '../../assets/images/alarm-clock.png';
import hamburger from '../../assets/images/hamburger.png';
import jambon from '../../assets/images/jambon.png';
import tirelire from '../../assets/images/tirelire.png';

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
              <div key={index}>
                <div
                  className={index === current ? 'slide active' : 'slide'}
                >
                  {index === current && (
                    <img className="card_img" src={pic} alt=""/>
                  )}
                </div>
              </div>
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
        <div className="card_restaurant">
          <h2 className="card_restaurant-name">{restaurant.name}</h2>
          <p className="card_restaurant-spec">{restaurant.spec}</p>
          <p>{restaurant.address}</p>
          <div>
            <ul className="spec_list">
              <li className="spec_list-item">
                <div className="spec_list-item__imgcont">
                  <img src={alarm} alt="" />
                </div>
                  {restaurant.tags[0]}
              </li>
              <li className="spec_list-item">
                <div className="spec_list-item__imgcont">
                  <img src={hamburger} alt="" />
                </div>
                {restaurant.tags[1]}
              </li>
              <li className="spec_list-item">
                <div className="spec_list-item__imgcont">
                  <img src={jambon} alt="" />
                </div>
                {restaurant.tags[2]}
              </li>
              <li className="spec_list-item">
                <div className="spec_list-item__imgcont">
                  <img src={tirelire} alt="" />
                </div>
                {restaurant.tags[3]}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`overlay ${displayCard ? "show" : ""}`}></div>
    </>
  );
};

export default DisplayCardButton;