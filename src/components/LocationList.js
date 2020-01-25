import React from 'react';
import WeatherLocation from './WeatherLocation/'
import PropTypes from 'prop-types';

const strComponents = cities =>{
    return(
        cities.map(city => <WeatherLocation key={city} city={city}/>)
    )
} 
const LocationList = ({ cities })  => {
       return (
        <div>
            {strComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities:PropTypes.array.isRequired,
}

export default LocationList;