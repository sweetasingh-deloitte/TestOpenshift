import React,{useState} from "react";
import './index.css';
const TrackTrace = () => {
  return (
    <div className="Track-Trace">
      <h3>Track and Trace</h3>
      <p>Keep a track of all your container at one place.</p>
      <form>
          <label htmlFor="container-number">Container Number</label>
          <input type="text"  id="container-number"/>
          <label htmlFor="shipping-line">Shipping Line</label>
          <select name="" id="shipping-line">
              <option value="X">Test</option>
          </select>
      </form>
    </div>
  );
};
export default TrackTrace;
