import React, { Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData/";
import './styles.css';
import getData from '../../services/transforWeather';
import {
  SUN,
} from './../../constants/weathers';
import { api_weather } from './../../constants/api_url';//constande de la api
/*Objeto con los datos de la temperatura que se
  envian al componente WeatherData.
*/ 
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
  
  handleUpdateClick = () => {
    fetch(api_weather)
    .then(resolve =>{
      return(resolve.json())
      })
    .then(data =>{
      const newWeather = getData(data);
      console.log(data);
            this.setState({
        city:data.name,
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
      <button onClick={this.handleUpdateClick}>Update</button>
    </div>
  );
  }
};
export default WeatherLocation;
