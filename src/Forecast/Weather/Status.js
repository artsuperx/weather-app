import React from 'react';
import format from 'date-fns/format';

export default ({ currentStatus }) => {
  console.log(currentStatus);
  const { humidity, temp } = currentStatus.main;
  const speed = currentStatus.wind.speed;
  const date = format(currentStatus.dt_txt, 'dddd Do');
  const icon = currentStatus.weather[0].icon;

  return <div>Status</div>;
};
