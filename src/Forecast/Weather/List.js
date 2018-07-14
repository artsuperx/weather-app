import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

const List = ({ weatherList }) => {
  const weather = weatherList.map(data => {
    const { dt_txt, weather, main, dt } = data;
    const temp = Math.round(main.temp);
    const icon = weather[0].icon;
    const day = format(dt_txt, 'ddd');
    return <li key={dt}>213</li>;
  });
  return <ul>{weather}</ul>;
};

List.propTypes = {
  weatherList: PropTypes.array.isRequired
};

export default List;
