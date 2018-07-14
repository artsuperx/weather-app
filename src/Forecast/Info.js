import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

const Info = ({ name, country, currentStatus }) => {
  const currentTime = format(new Date(), 'hh:mm a');
  const weather = currentStatus.weather[0];
  const { description, icon } = weather;

  return <div>Info</div>;
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  currentStatus: PropTypes.shape({
    weather: PropTypes.array.isRequired
  }).isRequired
};

export default Info;
