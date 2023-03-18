import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      console.warn("Hello")
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="Login">
        <h2 className="Login-head">Welcome to Shipzy</h2>
        <p className="Login-subhead">Enter your credentials to use your account</p>
      <form className="Login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input type="email" name="email" id="email" onChange={(e)=>handleEmail(e)} value={email} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e)=>handlePassword(e)}
          value={password}
        />
      </form>
      <Link to="/forget" className="Login-forget">Forget Password?</Link>
      <button className="Login-btn" type="submit">Login</button>
    </div>
  );
};
export default Login;
