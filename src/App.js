import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Location from './components/location/location.component';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row" style={{ margin: "100px auto" }}>
          <div className="col-lg-6 col-sm">
            <Location />
          </div>
          <div className="col-lg-6 col-sm">
            <img className="graphics" src="./graphics.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
