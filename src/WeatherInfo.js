import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="Weather row main-row mx-auto text-center d-flex justify-content-center">
    
      <div className="col-12">
        <h1 id="main-city">{props.data.city}</h1>
        <p className="main-date" id="main-date">
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="col-xs-12 col-sm-3">
        <img src="../images/sun-cloud.svg" alt={props.data.description} id="main-weather-image" />
      </div>
      <div className="col-xs-12 col-sm-5">
        <h3>
          <span id="main-temp">{Math.round(props.data.temperature)}</span> <span id="currentUnit">°C</span>
          <br />
          <p className="text-capitalize" id="main-description">{props.data.description}</p>
        </h3>
      </div>

  
      <div className="row mx-auto indicators">
        <div className="col-12 col-sm-4">
          <p>
            Humidity <br />
            <span id="humidity">{props.data.humidity}</span>%
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Wind <br />
            <span id="wind-speed">{Math.round(props.data.wind)}</span>km/h
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Pressure <br />
            <span id="pressure">{props.data.pressure}</span>mb
          </p>
        </div>

   
    </div>
    </div>
  );
    
}