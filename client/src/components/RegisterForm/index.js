import './index.scss';

const RegisterForm = ({
  username, 
  email, 
  password,
  changeFieldValue,
  handleRegister
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">username</label>
        <input 
          type="text" 
          value={username} 
          name="username" 
          onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
        />
        <label htmlFor="">email</label>
        <input 
          type="email" 
          value={email} 
          name="email" 
          onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
        />
        <label htmlFor="">password</label>
        <input 
          type="password" 
          value={password} 
          name="password" 
          onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}}
        />
        <button action="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;