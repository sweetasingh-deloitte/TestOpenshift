import React, { useState } from "react";
import { Link } from "react-router-dom";
const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Password-recovery Login">
      <h2 className="Login-head">Password Recovery</h2>
      <p className="Login-subhead">Enter your E-mail to reset your password</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <Link to="/verify">
          <button className="Login-btn">Reset Password</button>
        </Link>
      </form>
    </div>
  );
};
export default PasswordRecovery;
