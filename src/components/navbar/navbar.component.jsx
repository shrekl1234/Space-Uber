import React from "react";
import './navbar.styles.css';

function Navbar() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-md navbar-light  fixed-top">
        <a className="navbar-brand" href="#">
          Space Uber
        </a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active">
                <span className="activeText">Home</span>
              </a>
              <div className="bottomBorder"></div>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span>Product</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span>Company</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span>Safety</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <span>Help</span>
              </a>
            </li>
          </ul>
          <span className="navGap"></span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn activeText">Log In</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Sign up</button>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
}

export default Navbar;
