import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metrics");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
         return (
        <div>
        <span className="main-temp">{Math.round(props.celsius)}</span> 
        <span className="unit">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
        </div>
    );
    } else {
        let fahrenheitTemp = (props.celsius * 9/5) + 32;
        return(
        <div>
        <span className="main-temp">{Math.round(fahrenheitTemp)}</span> 
        <span className="unit"><a href="/" onClick={showCelsius}>°C</a> | °F</span>
        </div>
        )
    }
   
}