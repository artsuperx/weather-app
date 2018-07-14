import React from 'react';

import Status from './Status';
import List from './List';

/* Из 40 полученных объектов взять 1 для каждого дня */
const getWeatherOfDays = weatherList => {
  let seconds = weatherList[0].dt;

  const weather = weatherList.filter(day => {
    if (day.dt === seconds) {
      seconds += 86400;
      return true;
    } else return false;
  });

  return weather;
};

export default ({ weatherList }) => {
  const weather = getWeatherOfDays(weatherList);

  return (
    <div>
      <Status currentStatus={weather[0]} />
      <List weatherList={weather} />
    </div>
  );
};
