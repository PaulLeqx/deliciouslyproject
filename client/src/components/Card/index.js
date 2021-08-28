import './index.scss';

const hideCard = (e) =>  {
  console.log(e.target.parentElement);
  e.target.parentElement.style.display = 'none';
}

const Card = () => {
  return (
    <div className="card">
      <button onClick={(e) => hideCard(e)}>x</button>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2></h2>
        <h3></h3>
        <p></p>
        <div>
          <ul>
            <li>tags1</li>
            <li>tags2</li>
            <li>tags3</li>
            <li>tags4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Card;