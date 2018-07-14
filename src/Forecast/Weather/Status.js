import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

const Status = ({ currentStatus }) => {
  const { humidity, temp } = currentStatus.main;
  const speed = currentStatus.wind.speed;
  const date = format(currentStatus.dt_txt, 'dddd Do');
  const icon = currentStatus.weather[0].icon;

  return <div>Status</div>;
};

Status.propTypes = {
  currentStatus: PropTypes.shape({
    main: PropTypes.shape({
      humidity: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired
    }).isRequired,
    weather: PropTypes.array.isRequired,
    dt_txt: PropTypes.string.isRequired
  }).isRequired
};

export default Status;
