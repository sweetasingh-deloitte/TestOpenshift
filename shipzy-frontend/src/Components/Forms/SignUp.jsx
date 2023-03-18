import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const handleEmail = (e) => setEmail(e.target.value);

  const handleName = (e) => setName(e.target.value);

  const handleContact = (e) => setContact(e.target.value);
  return (
    <div className="SignUp Login">
      <h2 className="Login-head">Sign Up</h2>
      <p className="Login-subhead">Sign up to create an account with Shipzy</p>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="contact">Contact No</label>
        <input
          type="tel"
          name="contact"
          id="contact"
          value={contact}
          onChange={handleContact}
        />
        <Link to="/verify">
          <button type="submit" className="Login-btn">
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};
export default SignUp;
