import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import './index.scss';

import alarm from '../../assets/images/alarm-clock.png';
import hamburger from '../../assets/images/hamburger.png';
import jambon from '../../assets/images/jambon.png';
import tirelire from '../../assets/images/tirelire.png';

const UpdateRestaurantForm = ({
  name,
  spec,
  address,
  lat,
  long,
  tag1,
  tag2,
  tag3,
  tag4,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  fetchRestaurantData,
  changeFieldValue
}) => {

  const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
  const tags = [tag1, tag2, tag3, tag4];

  const [current, setCurrent] = useState(0);
  const length = pics.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 4000)
  }, [current]);

  const {id} = useParams();

  useEffect(() => {
    fetchRestaurantData(id);
  }, [fetchRestaurantData])

  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <>
      <Link to ="/dashboard">
        dashboard
      </Link>
      <form className="update_restaurant" onSubmit={handleSubmit}>
        <div className="card show update">
          <div className="carousel">
            {pics.map((pic, index) => {
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
            {pics.map((pic, index) => {
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
            <div className="card_restaurant-inputs">
              <input 
                className="card_restaurant-name__input" 
                value={name}
                name="name"
                onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
              />
              <input 
                className="card_restaurant-spec__input" 
                value={spec}
                name="spec" 
              />
              <input 
                className="card_restaurant-add__input" 
                value={address}
                name="address"
              />
            </div>
            <div>
              <ul className="spec_list">
                <li className="spec_list-item">
                  <div className="spec_list-item__imgcont">
                    <img src={alarm} alt="" />
                  </div>
                  <input 
                    className="spec_list-item__desc" 
                    type="text" 
                    value={tags[0]}
                    name="tag1"
                    onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
                  />
                </li>
                <li className="spec_list-item">
                  <div className="spec_list-item__imgcont">
                    <img src={hamburger} alt="" />
                  </div>
                  <input 
                    className="spec_list-item__desc" 
                    type="text" 
                    value={tags[1]}
                    name="tag2"
                    onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
                  />
                </li>
                <li className="spec_list-item">
                  <div className="spec_list-item__imgcont">
                    <img src={jambon} alt="" />
                  </div>
                  <input 
                    className="spec_list-item__desc" 
                    type="text" 
                    value={tags[2]}
                    name="tag3"
                    onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
                  />
                </li>
                <li className="spec_list-item">
                  <div className="spec_list-item__imgcont">
                    <img src={tirelire} alt="" />
                  </div>
                  <input 
                    className="spec_list-item__desc" 
                    type="text" 
                    value={tags[3]}
                    name="tag4"
                    onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="update_links">
          <input
            type="text" 
            value={pics[0]}
            name="pic1"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <input 
            type="text" 
            value={pics[1]}
            name="pic2"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
          />
          <input 
            type="text" 
            value={pics[2]}
            name="pic3"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
          />
          <input 
            type="text" 
            value={pics[3]}
            name="pic4"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <input 
            type="text" 
            value={pics[4]}
            name="pic5"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <input 
            type="text" 
            value={pics[5]}
            name="pic6"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <label htmlFor="">Latitude</label>
          <input 
            type="text" 
            value={lat}
            name="lat"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <label htmlFor="">Longitude</label>
          <input 
            type="text" 
            value={long}
            name="long"
            onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
          />
          <button action="submit">Update</button>
        </div>
      </form>
    </>
  );
};


export default UpdateRestaurantForm;