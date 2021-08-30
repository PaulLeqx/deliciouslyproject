import './index.scss';

const Dashboard = ({
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
  changeFieldValue
}) => {
  return (
    <div className="dashboard_cont">
      <h1>Welcome</h1>
      <h2>Create Restaurant</h2>
      <form className="form_create">
        <label htmlFor="">Name</label>
        <input type="text" value={name} name="name" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Food Type</label>
        <input type="text" value={spec} name="spec" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Address</label>
        <input type="text" value={address} name="address" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Latitude</label>
        <input type="number" value={lat} name="lat" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Longitude</label>
        <input type="number" value={long} name="long" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Tag 1</label>
        <input type="text" value={tag1} name="tag1" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Tag 2</label>
        <input type="text" value={tag2} name="tag2" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Tag 3</label>
        <input type="text" value={tag3} name="tag3" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Tag 4</label>
        <input type="text" value={tag4} name="tag4" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Pic 1</label>
        <input type="text" value={pic1} name="pic1" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Pic 2</label>
        <input type="text" value={pic2} name="pic2" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <label htmlFor="">Pic 3</label>
        <input type="text" value={pic3} name="pic3" onChange={(e) => changeFieldValue(e.target.value, e.target.name)}/>
        <button action="submit">create restaurant</button>
      </form>
    </div>

  );
};


export default Dashboard;