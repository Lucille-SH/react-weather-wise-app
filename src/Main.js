import React from "react";
import "./styles/Main.css";

export default function Main() {
  let weatherData = {
    city: "Dublin",
    currentDate: "Friday 12:43",
    currentCondition: "scattered clouds",
    humidity: "66%",
    wind: "7.72km/h",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    currentDegrees: "5",
    unit: "°C",
  };

  return (
    <div>
      <hr className="divider" />
      <main className="Main">
        <div className="mainCityDetails">
          <h1 className="mainCity">{weatherData.city}</h1>
          <p>
            <span>{weatherData.currentDate}</span>,
            <span> {weatherData.currentCondition}</span>
            <br />
            Humidity:
            <span className="humidityPercent"> {weatherData.humidity}</span>,
            Wind:
            <span className="windKms"> {weatherData.wind}</span>
          </p>
        </div>
        <div className="mainTemp">
          <div className="mainWeatherIcon">
            {" "}
            <img src={weatherData.imgUrl} alt="" />{" "}
          </div>
          <div className="mainWeatherDegrees">{weatherData.currentDegrees}</div>
          <div className="mainWeatherUnit">{weatherData.unit}</div>
        </div>
      </main>
    </div>
  );
}
