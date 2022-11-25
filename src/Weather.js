
import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    temperature: response.data.temperature.current,
    city: response.data.city,
    date: "Saturday 22.10, 16:20",
    wind: response.data.wind.speed,
    description: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    pressure: response.data.temperature.pressure
  })

  setReady(true);
}

if (ready) {
return (
  <div className="Weather row main-row mx-auto text-center d-flex justify-content-center">
    
      <div className="col-12">
        <h1 id="main-city">{weatherData.city}</h1>
        <p className="main-date" id="main-date">
          {weatherData.date}
        </p>
      </div>

      <div className="col-xs-12 col-sm-3">
        <img src="../images/sun-cloud.svg" alt={weatherData.description} id="main-weather-image" />
      </div>
      <div className="col-xs-12 col-sm-5">
        <h3>
          <span id="main-temp">{Math.round(weatherData.temperature)}</span> <span id="currentUnit">°C</span>
          <br />
          <p className="text-capitalize" id="main-description">{weatherData.description}</p>
        </h3>
      </div>

  
      <div className="row mx-auto indicators">
        <div className="col-12 col-sm-4">
          <p>
            Humidity <br />
            <span id="humidity">{weatherData.humidity}</span>%
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Wind <br />
            <span id="wind-speed">{Math.round(weatherData.wind)}</span>km/h
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Pressure <br />
            <span id="pressure">{weatherData.pressure}</span>mb
          </p>
        </div>

   
    </div>
    </div>
  );
} else {
  let apiKey = "e9a1dd3of44ta6f17604dd081380f1bd";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return "Loading ..."
}

  
}

