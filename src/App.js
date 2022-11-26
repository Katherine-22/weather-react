import "./app.css";

import Forecast from "./Forecast";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
        <Weather defaultCity="Tokyo"/>

        <p className="forecastHeading" id="forecast">
          Daily forecast
        </p>
        <div className="row forecast">
          <Forecast maxTemp={18} lowerTemp={13} day="Sun" />
          <Forecast maxTemp={19} lowerTemp={12} day="Mon" />
          <Forecast maxTemp={20} lowerTemp={11} day="Tue" />
          <Forecast maxTemp={21} lowerTemp={10} day="Wed" />
          <Forecast maxTemp={22} lowerTemp={9} day="Thu" />
          <Forecast maxTemp={23} lowerTemp={8} day="Fri" />
        </div>
      </div>
      <p className="source-link">
        This project was built by Kateryna Kuznietsova, and it is{" "}
        <a href="https://github.com/Katherine-22/weather-react" target="_blank"  rel="noreferrer">
          open-sourced on GitHub.
        </a>
         
      </p>
    </div>
  );
}
