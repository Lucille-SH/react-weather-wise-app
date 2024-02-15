import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Main.css";
import "./styles/Forecast.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Main(props) {
  let [city, setCity] = useState(" ");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState("");
  let [forecast, setForecast] = useState("");

  function createForecastData(response) {
    setForecastData({
      forecastImgUrl: response.data.condition.icon_url,
      forecastDegrees: Math.round(response.data.daily.temperature.day),
      forecastTempHigh: Math.round(response.data.daily.temperature.maximum),
      forecastTempLow: Math.round(response.data.daily.temperature.minimum),
    });

    // createForecast();
  }

  //   function createForecast(response) {
  //  response.data.daily.forEach(function (day, index) {
  //    if (index < 5) {
  //    return (
  //      forecast =
  //        forecast +
  //        <div className = "weatherForecastDay">
  //       <div className="day">{formatDay(day.time)}</div>
  //               <img src={
  //                 forecastData.forecastImgUrl} className="weatherForecastIcon"></img>
  //             <div className="weatherTemperatures">
  //               <span className="weatherTemperaturesHigh">{forecastData.forecastTempHigh}°</span>
  //               <span className="weatherTemperaturesLow">{forecastData.forecastTempLow}°</span>
  //             </div>
  //             </div>);
  //    }}

  function createWeather(response) {
    setWeather({
      date: new Date(response.data.time * 1000),
      dataCity: response.data.city,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      imgUrl: response.data.condition.icon_url,
      degrees: Math.round(response.data.temperature.current),
      unit: "°C",
    });
    setLoaded(true);
  }

  function handleChange(event) {
    setCity(event.target.value.trim());
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "66b4t441aodafc3797bfd80f9495a36b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(createWeather);
    axios.get(forecastApiUrl).then(createForecastData);
  }

  if (loaded) {
    return (
      <div>
        <div className="Search">
          <form className="searchForm">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="citySearch"
              autoFocus="on"
            />
            <input type="submit" value="Search" className="citySubmit" />
          </form>
        </div>
        <hr className="divider" />
        <main className="Main">
          <div className="mainCityDetails">
            <h1 className="mainCity">{weather.dataCity}</h1>
            <p>
              <span>
                <FormattedDate date={weather.date} />
              </span>
              ,<span className="text-capitalize"> {weather.condition}</span>
              <br />
              Humidity:
              <span className="humidityPercent"> {weather.humidity}%</span>,
              Wind:
              <span className="windKms"> {weather.wind}km/h</span>
            </p>
          </div>
          <div className="mainTemp">
            <div className="mainWeatherIcon">
              {" "}
              <img src={weather.imgUrl} alt="" />{" "}
            </div>
            <div className="mainWeatherDegrees">{weather.degrees}</div>
            <div className="mainWeatherUnit">{weather.unit}</div>
          </div>
        </main>
        <div className="Forecast">
          <div className="weatherForecast">{forecast}</div>
          <hr className="divider" />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="Search">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              className="citySearch"
              autoFocus="on"
              onChange={handleChange}
            />
            <input type="submit" value="Search" className="citySubmit" />
          </form>
        </div>
        <hr className="divider" />
        <div className="text-center">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#4c2b5f"
          />
        </div>
      </div>
    );
  }
}
