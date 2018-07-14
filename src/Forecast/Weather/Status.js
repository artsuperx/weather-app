import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StStatus = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Content = styled.div`
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const Date = styled.div``;

const Description = styled.div``;

const Status = ({ currentStatus }) => {
  const { humidity, temp } = currentStatus.main;
  const speed = currentStatus.wind.speed;
  const date = format(currentStatus.dt_txt, 'dddd Do');
  const icon = currentStatus.weather[0].icon;

  return (
    <StStatus>
      <Content>
        <Temperature>{Math.round(temp)}°</Temperature>
        <Date>{date}</Date>
      </Content>
      <Content>
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
