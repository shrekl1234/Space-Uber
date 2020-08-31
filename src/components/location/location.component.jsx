import React from 'react';
import './location.styles.css';

const Location = () => (
  <div className="location">
    <h1>
      Rides to{" "}
      <h1 style={{ color: "#698CE4", display: "inline" }}>any point</h1> <br />
      of the Universe{" "}
    </h1>
    <div className="newRideText">
      <p> Wow! the Milky Way direction is unlocked.</p>
      <p>Request a ride right now</p>
    </div>
    <form>
      <div className="input">
        <div className="input-prepend">
          <p className="input-prepend-text">A</p>
        </div>
        <input placeholder="Enter pickup location" />
        <i
          class="fas fa-map-marker-alt input-postpend"
          style={{ color: "#c8d5b9" }}
        ></i>
      </div>
      <div className="input">
        <div className="input-prepend" style={{ backgroundColor: "#9F88D7" }}>
          <p className="input-prepend-text">B</p>
        </div>
        <input placeholder="Enter destination" />
      </div>
    </form>
  </div>
);

export default Location;
