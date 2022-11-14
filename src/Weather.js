
import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather row d-flex justify-content-center">
      <div className="col-12">
        <h1 id="main-city">London</h1>
        <p className="main-date" id="main-date">
          Saturday 22.10, 16:20
        </p>
      </div>

      <div className="col-xs-12 col-sm-3">
        <img src="../images/sun-cloud.svg" alt="" id="main-weather-image" />
      </div>
      <div className="col-xs-12 col-sm-5">
        <h3>
          <span id="main-temp">17</span> <span id="currentUnit">°C</span>
          <br />
          <p id="main-description">Broken Clouds</p>
        </h3>
      </div>
    </div>
  );
}

