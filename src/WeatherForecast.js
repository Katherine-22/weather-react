import axios from "axios";
import React, { useState, useEffect } from "react";
import "./weatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect( () => {
    setLoaded(false);},
    [props.coordinates]
)

function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
return (
    <div className="WeatherForecast">

      <p className="forecastHeading">
          Daily forecast
        </p>

        <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if ((index < 8) && (index > 0)) {
                    return (
                        <div className="col-4 col-md-2 px-1" key={index}>
                            <div className="weekday border" >
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                    </div>);
                } else {return null;}
                
            })}
        </div>
      
    </div>
    );



} else {
    
let apiKey = "e9a1dd3of44ta6f17604dd081380f1bd";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;


axios.get(apiURL).then(handleResponse);

return null;
}
}