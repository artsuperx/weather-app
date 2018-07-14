import React from 'react';

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

export default ({ forecast, err }) => {
  return err ? <div>Network Error</div> : displayForecast(forecast);
};
