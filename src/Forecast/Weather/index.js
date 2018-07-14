import React from 'react';
import PropTypes from 'prop-types';

import Status from './Status';
import List from './List';

/* Из 40 полученных объектов взять 1 для каждого дня */
const getWeatherOfDays = weatherList => {
  let seconds = weatherList[0].dt;

  const weather = weatherList.filter(day => {
    if (day.dt === seconds) {
      // прибавить кол-во секунд в 24 часах, чтобы взять следующий день
      seconds += 86400;
      return true;
    } else return false;
  });

  return weather;
};

const Weather = ({ weatherList }) => {
  const weather = getWeatherOfDays(weatherList);

  return (
    <div>
      <Status currentStatus={weather[0]} />
      <List weatherList={weather} />
    </div>
  );
};

Weather.propTypes = {
  weatherList: PropTypes.array.isRequired
};

export default Weather;
