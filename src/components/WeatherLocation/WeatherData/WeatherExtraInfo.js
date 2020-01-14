import React from "react";
import PropTypes from 'prop-types';
import './styles.css'
const WeatherExtraInfo = ({humidity, wind}) => {
return (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}% -`}</span>
        <span className="extraInfoText">{`Vientos: ${wind} viento`}</span>
    </div>
);
};
WeatherExtraInfo.propTypes = {
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,

}

export default WeatherExtraInfo;
