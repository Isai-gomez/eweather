import { apiKey, urlBaseWeather } from '../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&appid=${apiKey}&units=metric`;
}

export default getUrlWeatherByCity;