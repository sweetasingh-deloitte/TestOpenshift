import React from 'react';
import "./Landing.css"
const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="Landing-heading">
        We make your cargo
        <br /> transport simple{" "}
      </h1>
      <p className="Landing-sub">
        We are the name of game when it comes to moving things from point A to
        point B
      </p>
      <div className="Landing-buttons">
        <button className="Landing-book">Book Shipment</button>
        <button className="Landing-services">List of Services</button>
      </div>
    </div>
  );
};
export default Landing;
