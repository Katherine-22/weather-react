import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
        <Weather defaultCity="Sydney"/>
        
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
