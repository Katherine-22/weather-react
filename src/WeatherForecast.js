import React from "react";
import "./weatherForecast.css";


export default function WeatherForecast(props) {
    return (
    <div className="WeatherForecast row">
        <div className="col-4 col-md-2 px-1">
            <div className="col weekday">
                <div className="WeatherForecast-day">Sun</div>
                <img src={props.icon} alt="forecast weather"/>
                <div className="WeatherForecast-temperates">
                    <span className="WeatherForecast-temperate-max">19°</span>
                    <span className="WeatherForecast-temperate-min">15°</span>
                </div>
            </div>
        </div>
    </div>
    );
}