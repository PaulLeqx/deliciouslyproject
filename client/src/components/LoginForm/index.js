import './index.scss';

const LoginForm = ({
  loginEmail, 
  loginPassword, 
  changeFieldValue, 
  handleLogin, 
}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  }
  
  return (
  <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">email</label>
      <input 
        type="email" 
        value={loginEmail} 
        name="loginEmail" 
        onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
      />
      <label htmlFor="">password</label>
      <input 
        type="password" 
        value={loginPassword} 
        name="loginPassword" 
        onChange={(e) => {changeFieldValue(e.target.value, e.target.name)}} 
      />
      <button action="submit">Connection</button>
    </form>
  </div>
  );
};

export default LoginForm;