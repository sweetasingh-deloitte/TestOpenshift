import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/images/Shipzy Logo 1.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="Link-group">
        <Link className="Header-link" to="/">
          Services
        </Link>
        <Link className="Header-link" to="/">
          About us
        </Link>
        <Link className="Header-link" to="/">
          Contact us
        </Link>
        <Link className="Header-link" to="/">
          FAQs
        </Link>
      </div>
      <div className="Button-Group">
        <Link to="/login" className="Login-button">
          Login
        </Link>
        <Link to="/signup" className="Login-button">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Header;
