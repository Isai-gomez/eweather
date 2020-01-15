import React, { Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import {
  SUN,
  WINDY,
} from './../../constants/weathers';
/*Objeto con los datos de la temperatura que se
  envian al componente WeatherData.
*/ 

  const location = "Comalcalco,MX";
  const apiKey = "4a3b955b30e14049a845fc8846fa2ff0";
  const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";

  const api_weather = `${urlBaseWeather}?q=${location}&appid=${apiKey}`;

const data2 = {
  temperature: 34,
  weatherState: WINDY,
  humidity: 30,
  wind: '15 m/s',
}
const data = {
  temperature: 3,
  weatherState: SUN,
  humidity: 20,
  wind: '15 m/s',
}

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city:"Tabasco",
      data:data
    }
  }
  handlerUpdateClick = () => {
    fetch(api_weather)
    .then(resolve =>{
      return(resolve.json())
      })
    .then(data =>{
        console.log(data);
        });

    this.setState({
      city:"Comalcalco",
      data:data2,
    })
  }
  render(){
    const { city, data } = this.state;
  return (
    <div className="weatherLocationCont">
      <Location city={city} />
      <WeatherData data={data}/>
      <button onClick={this.handlerUpdateClick}>Update</button>
    </div>
  );
  }
};
export default WeatherLocation;
