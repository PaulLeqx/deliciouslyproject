import './index.scss';
import Card from '../Card';

const DisplayCardButton = ({restaurant}) => {

  const displayRestaurantCard = (e) => {
    console.log(restaurant);
    const card = e.target.nextElementSibling;
    console.log(card);
    card.style.display = 'block';
  }

  return (
    <>
      <button onClick={(e) => displayRestaurantCard(e)}>
        {restaurant.name}
      </button>
      <Card restaurant={restaurant} />
    </>
  );
};

export default DisplayCardButton;