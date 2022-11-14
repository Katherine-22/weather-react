import React from "react";
import Weather from "./Weather";
import Conditions from "./Conditions";
import "./mainWeather.css";

export default function MainWeather() {
  return (
    <div className="MainWeather row main-row mx-auto text-center d-flex justify-content-center">
   <Weather />
      <Conditions />
    </div>
  );
}