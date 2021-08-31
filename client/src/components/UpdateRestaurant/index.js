import {Link} from 'react-router-dom';
import './index.scss';

const UpdateRestaurants = ({restaurants}) => {
  return (
    <>
      <Link to="/dashboard">
        Dashboard
      </Link>
      {restaurants.map((restaurant, index) => (
        <div key={index}>
          <Link to={`/update/${restaurant._id}`}>
            {restaurant.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default UpdateRestaurants;