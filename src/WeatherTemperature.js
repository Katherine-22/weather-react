import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div>
        <span className="main-temp">{Math.round(props.celsius)}</span> 
        <span className="unit">°C</span>
        </div>
    );
}