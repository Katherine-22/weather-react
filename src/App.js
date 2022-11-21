import "./app.css";
import Form from "./Form.js";
import Forecast from "./Forecast";
import MainWeather from "./MainWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <MainWeather />

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
        <a href="https://github.com/Katherine-22/weather-react" target="_blank">
          Open-source code 
        </a>{" "}
         by Kateryna Kuznietsova
      </p>
    </div>
  );
}
