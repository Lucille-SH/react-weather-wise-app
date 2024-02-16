import "./styles/Main.css";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function MainWeather(props) {
  return (
    <main className="Main grid">
      <div className="row">
        <div className="col-12">
          <h1 className="mainCity pb-2">{props.data.city}</h1>
        </div>
      </div>
      <div className="row pb-0">
        <div className="col-4 mainCityDetails ps-3">
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          <br />
          <span className="text-capitalize"> {props.data.condition}</span>
          <br />
          Humidity:
          <span className="humidityPercent"> {props.data.humidity}%</span>
          <br />
          Wind:
          <span className="windKms"> {props.data.wind}km/h</span>
        </div>
        <div className="col-8 mainTemp text-end pe-4">
          <div>
            <span className="mainWeatherIcon">
              {" "}
              <img src={props.data.imgUrl} alt="" />{" "}
            </span>
            <WeatherTemperature celsius={props.data.degrees} unit="celsius" />
          </div>
        </div>
      </div>
    </main>
  );
}
