import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from '../icons';
import { minWidth } from '../../media';

const StList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

const Forecast = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  padding: 5px 15px;
  border-left: 1px solid #ccc;

  :first-of-type {
    border-left: none;
  }

  ${minWidth.md`
    :first-of-type {
      border-left: 1px solid #ccc;
    }
  `};
`;

const Day = styled.div``;

const Temperature = styled.div``;

const Icon = styled.img`
  width: 35px;
  margin: 15px 0;
`;

const List = ({ weatherList }) => {
  const weather = weatherList.map(data => {
    const { dt_txt, weather, main, dt } = data;
    const temp = Math.round(main.temp);
    const icon = weather[0].main;
    const day = format(dt_txt, 'ddd');

    return (
      <Forecast key={dt}>
        <Day>{day}</Day>
        <Icon src={icons[icon].weather} />
        <Temperature>{temp}°</Temperature>
      </Forecast>
    );
  });
  return <StList>{weather}</StList>;
};

List.propTypes = {
  weatherList: PropTypes.array.isRequired
};

export default List;
