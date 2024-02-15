import "./styles/Forecast.css";
// import axios from "axios";

export default function Forecast(props) {
  //   let [forecastData, setForecastData] = useState("");
  //   function createForecastData(response) {
  //     setForecastData({
  //       forecastImgUrl: response.data.condition.icon_url,
  //       forecastDegrees: Math.round(response.data.daily.temperature.day),
  //       forecastTempHigh: Math.round(response.data.daily.temperature.maximum),
  //       forecastTempLow: Math.round(response.data.daily.temperature.minimum),
  //     });
  //     createForecast();
  //   }
  //     function createForecast(response) {
  //    response.data.daily.forEach(function (day, index) {
  //      if (index < 5) {
  //      return (
  //        forecast =
  //          forecast +
  //          <div className = "weatherForecastDay">
  //         <div className="day">{formatDay(day.time)}</div>
  //                 <img src={
  //                   forecastData.forecastImgUrl} className="weatherForecastIcon"></img>
  //               <div className="weatherTemperatures">
  //                 <span className="weatherTemperaturesHigh">{forecastData.forecastTempHigh}°</span>
  //                 <span className="weatherTemperaturesLow">{forecastData.forecastTempLow}°</span>
  //               </div>
  //               </div>);
  //      }}
  // let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  // axios.get(forecastApiUrl).then(createForecastData);
}
