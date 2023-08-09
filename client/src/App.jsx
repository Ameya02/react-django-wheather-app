import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";
function App() {
  const [cityName, setCityName] = useState("");

  const [weatherData, setweatherData] = useState();

  useEffect(() => {}, [weatherData]);

  const getWeatherInfo = async (e) => {
    if (e.key == "Enter") {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/weatherinfo/",
          {
            cityName: cityName,
          }
        );
        setweatherData([JSON.parse(response.data)]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="App">
      <div className="navbar">
        <input
          type="text"
          className="search"
          placeholder="City or Place"
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={getWeatherInfo}
        />
        <button type="button" className="Location_btn">
          Location
        </button>
      </div>
      {weatherData ? <Weather weatherData={weatherData} /> : <></>}
    </div>
  );
}

export default App;
