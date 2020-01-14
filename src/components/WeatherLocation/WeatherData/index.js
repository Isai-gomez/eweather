import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import './styles.css';
/*Se reciben los datos enviados desde WeatherLoctio
  se destructura al recibir en WeatherData.
*/
const WeatherData = ({ data:{temperature,weatherState,humidity,wind }}) => { 
    return (
    <div className="weatherDataCont">
    <WeatherTemperature 
    temperature= { temperature } 
    weatherState= { weatherState }
    />
    <WeatherExtraInfo humidity={ humidity } wind={ wind }/>
  </div>
  );
};
export default WeatherData;
