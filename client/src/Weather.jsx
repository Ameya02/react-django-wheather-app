import "./weather.css";
const Weather = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="weather-main">
      <div className="weather-body">
        <div className="weather-card">
          {weatherData.map((wD) => (
            <div key={wD.name} className="weather-details">
              <h2
                style={{
                  fontSize: "3rem",
                }}
              >
                {wD.name} ,{wD.country}
              </h2>
              <h1
                style={{
                  fontSize: "5rem",
                }}
              >
                {wD.temp}{" "}
                <span style={{ verticalAlign: "super", fontSize: "49px" }}>
                  o
                </span>{" "}
                C
              </h1>
              <h3
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {wD.weather}
              </h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={"http://openweathermap.org/img/w/" + wD.icon + ".png"}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="weather-card">
          {weatherData?.map((wD) => (
            <div key={wD.name} className="weather-info">
              <h3>Humidity: {wD.humidity}</h3>
              <h3>Wind: {wD.wind}</h3>
              <h3>Pressure: {wD.pressure}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
