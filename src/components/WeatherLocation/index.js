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
  getWeatherState = weatherData => {
    return SUN
  }
  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(weather_data); 
    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind:`${speed} m/s`
    }
    return data
  }
  handlerUpdateClick = () => {
    fetch(api_weather)
    .then(resolve =>{
      return(resolve.json())
      })
    .then(data =>{
      const newWeather = this.getData(data);
      console.log(data);
      debugger;
      this.setState({
        city:"Comalcalco",
        data:newWeather,
      })
      console.log(data);
      });

    
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
