
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
  console.log(response.data);
  
  setWeatherData({
    temperature: response.data.temperature.current,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    wind: response.data.wind.speed,
    description: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    pressure: response.data.temperature.pressure,
    icon: response.data.condition.icon_url,
    coord: response.data.coordinates
  })

  setReady(true);
}

function search() {
  let apiKey = "e9a1dd3of44ta6f17604dd081380f1bd";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  //search for a city using a fucntion search()
  search();

}
function handleCityChange(event) {
  setCity(event.target.value);
  
}

if (ready) {
return (
  <div className="Weather">
    <div className="Form">
      
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7 col-md-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="search-bar"
                id="search-text-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-5 col-md-3">
              <input type="submit" value="Search" className="btn btn-search" />
            </div>
          </div>
        </form>
      
    </div>
    <WeatherInfo data={weatherData} />
    <WeatherForecast coordinates={weatherData.coord}/>
  </div>)
  
} else {
  
  search();
  return "Loading ..."
}

  
}

