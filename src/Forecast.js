import React from "react";
import "./forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast col-4 col-md-2 px-1">
      <div className="weekday">
        <img src="images/sun-cloud.png" alt="" />
        <h3>
          <span className="maxTemp">{props.maxTemp}° / </span>
          <span className="lowerTemp">{props.lowerTemp}°</span>
        </h3>
        <p id="weather-forecast-day">{props.day}</p>
      </div>
    </div>
  );
}
