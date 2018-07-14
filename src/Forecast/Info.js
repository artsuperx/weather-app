import React from 'react';
import format from 'date-fns/format';

export default ({ name, country, currentStatus }) => {
  const currentTime = format(new Date(), 'hh:mm a');
  const weather = currentStatus.weather[0];
  const { description, icon } = weather;

  return <div>Info</div>;
};
