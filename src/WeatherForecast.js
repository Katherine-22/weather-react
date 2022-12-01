import axios from "axios";
import React from "react";
import "./weatherForecast.css";


export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);

}

let apiKey = "e9a1dd3of44ta6f17604dd081380f1bd";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;


axios.get(apiURL).then(handleResponse);

    return (
    <div className="WeatherForecast row">
        <div className="col-4 col-md-2 px-1">
            <div className="col weekday">
                <div className="WeatherForecast-day">Sun</div>
                <img src="" alt="forecast weather"/>
                <div className="WeatherForecast-temperates">
                    <span className="WeatherForecast-temperate-max">19°</span>
                    <span className="WeatherForecast-temperate-min">15°</span>
                </div>
            </div>
        </div>
    </div>
    );
}