import React from "react";
import "./conditions.css";

export default function Conditions() {
  return (
    <div className="Conditions">
      <div className="row mx-auto indicators">
        <div className="col-12 col-sm-4">
          <p>
            Humidity <br />
            <span id="humidity">78</span>%
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Wind <br />
            <span id="wind-speed">3</span>km/h
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <p>
            Pressure <br />
            <span id="pressure">1010</span>mb
          </p>
        </div>
      </div>
    </div>
  );
}
