import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from '../icons';
import { minWidth } from '../../media';

const StStatus = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;

  ${minWidth.md`
    margin-right: 20px;
    margin-bottom: 0;
  `};
`;

const Content = styled.div`
  text-align: center;
  margin-right: 20px;

  :last-of-type {
    margin-right: 0;
  }
`;

const Temperature = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const Date = styled.div``;

const Icon = styled.img`
  width: 75px;
`;

const Description = styled.div``;

const Status = ({ currentStatus }) => {
  const { humidity, temp } = currentStatus.main;
  const speed = currentStatus.wind.speed;
  const date = format(currentStatus.dt_txt, 'dddd Do');
  const icon = currentStatus.weather[0].main;

  return (
    <StStatus>
      <Content>
        <Temperature>{Math.round(temp)}°</Temperature>
        <Date>{date}</Date>
      </Content>
      <Content>
        <Icon src={icons[icon].weather} />
        <Description>
          {speed}ms / {humidity}%
        </Description>
      </Content>
    </StStatus>
  );
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
