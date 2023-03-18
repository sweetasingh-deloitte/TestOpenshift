import React, { useState } from "react";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="SetPassword Login">
      <h2 className="Login-head">Set Password</h2>
      <p className="Login-subhead">Set password to Login</p>
      <form>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <button className="Login-btn">Confirm</button>
      </form>
    </div>
  );
};
export default SetPassword;
