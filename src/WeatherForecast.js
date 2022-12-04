import axios from "axios";
import React, { useState } from "react";
import "./weatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
}

if (loaded) {
return (
    <div className="WeatherForecast row">
        <div className="col-4 col-md-2 px-1">
            <div className="col weekday">
                <WeatherForecastDay data={forecast[1]}/>
            </div>
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