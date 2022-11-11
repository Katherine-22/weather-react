
import axios from "axios";

export default function Weather(props) {
function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
}

    let apiKey = "31f7dc5277687ce116d1207621713d35";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return "Hello from Weather"

}
