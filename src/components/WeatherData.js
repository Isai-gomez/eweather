import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
const WeatherData = () => { 
    return (<div>
    <WeatherTemperature 
    temperature={20} 
    weatherState={''}
    />
    <WeatherExtraInfo />
  </div>)
};
export default WeatherData;
