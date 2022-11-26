import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="Weather row main-row mx-auto text-center d-flex justify-content-center">
    
      <div className="col-12">
        <h1 id="main-city">{props.data.city}</h1>
        <p className="main-date" >
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="col-xs-12 col-sm-3">
        <img src={props.data.icon} alt={props.data.description}  />
      </div>
      <div className="col-xs-12 col-sm-5">
        <div className="main-temperature">
          <WeatherTemperature celsius={props.data.temperature}/>
          <p className="text-capitalize main-description">{props.data.description}</p>
        </div>
      </div>

  
      <div className="row mx-auto indicators">
        <div className="col-12 col-sm-4">
          <p>
            Humidity <br />
            <span className="numbers">{props.data.humidity} %</span>
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Wind <br />
            <span className="numbers">{Math.round(props.data.wind)} km/h</span>
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Pressure <br />
            <span className="numbers">{props.data.pressure} mb</span>
          </p>
        </div>

   
    </div>
    </div>
  );
    
}