import {
    SUN,
  } from '../constants/weathers';
  
const getWeatherState = weatherData => {
    return SUN
  }
const getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data); 
    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind:`${speed} m/s`
    }
    return data
  }
  export default getData;