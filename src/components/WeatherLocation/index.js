import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import {
  SUN,
} from './../../constants/weathers';
/*Objeto con los datos de la temperatura que se
  envian al componente WeatherData.
*/ 
const data = {
  temperature: 9,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

const WeatherLocation = () => {
  return (
    <div className="weatherLocationCont">
      <Location city={"Tabasco"} />
      <WeatherData data={data}/>
    </div>
  );
};
export default WeatherLocation;
