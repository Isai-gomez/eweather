import React from 'react';
import WeatherLocation from './WeatherLocation/'
import PropTypes from 'prop-types';

const LocationList = ({ cities, onSelectedLocation })  => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    const strComponents = cities =>{
        return(
            cities.map(city => <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={()=> handleWeatherLocationClick( city )}
                />)
        )
    }
       return (
        <div>
            {strComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;