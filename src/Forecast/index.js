import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';
import Weather from './Weather';

const displayForecast = forecast => {
  const { name, country } = forecast.city;
  const weatherList = forecast.list;

  return (
    <div>
      <Info name={name} country={country} currentStatus={weatherList[0]} />
      <Weather weatherList={weatherList} />
    </div>
  );
};

const Forecast = ({ forecast, err }) => {
  return err ? <div>Network Error</div> : displayForecast(forecast);
};

Forecast.propTypes = {
  err: PropTypes.bool.isRequired,
  forecast: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string
    }).isRequired,
    list: PropTypes.array.isRequired
  }).isRequired
};

export default Forecast;
