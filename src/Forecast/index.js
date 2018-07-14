import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Info from './Info';
import Weather from './Weather';

const StForecast = styled.div`
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

const displayForecast = forecast => {
  const { name, country } = forecast.city;
  const weatherList = forecast.list;

  return (
    <StForecast>
      <Info name={name} country={country} currentStatus={weatherList[0]} />
      <Weather weatherList={weatherList} />
    </StForecast>
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
