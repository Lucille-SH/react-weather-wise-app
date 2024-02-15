import "./styles/Main.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function MainWeather(props) {
  return (
    <main className="Main">
      <div className="mainCityDetails">
        <h1 className="mainCity">{props.data.city}</h1>
        <p>
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          ,<span className="text-capitalize"> {props.data.condition}</span>
          <br />
          Humidity:
          <span className="humidityPercent"> {props.data.humidity}%</span>,
          Wind:
          <span className="windKms"> {props.data.wind}km/h</span>
        </p>
      </div>
      <div className="mainTemp">
        <div className="mainWeatherIcon">
          {" "}
          <img src={props.data.imgUrl} alt="" />{" "}
        </div>
        <WeatherTemperature celsius={props.data.degrees} unit="celsius" />
      </div>
    </main>
  );
}
