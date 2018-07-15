import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Status from './Status';
import List from './List';

const StWeather = styled.div`
  background-color: #fff;
  color: #414040;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 15px 0px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
    <StWeather>
      <Status currentStatus={weather[0]} />
      <List weatherList={weather} />
    </StWeather>
  );
};

Weather.propTypes = {
  weatherList: PropTypes.array.isRequired
};

export default Weather;
