const location = "Comalcalco,MX";
const apiKey = "4a3b955b30e14049a845fc8846fa2ff0";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${urlBaseWeather}?q=${location}&appid=${apiKey}&units=metric`;
