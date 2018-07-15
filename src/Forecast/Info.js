import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moon from './moon.svg';
import sun from './sun.svg';
import icons from './icons';

const StInfo = styled.div`
  background-color: rgba(44, 170, 239, 0.5);
  color: #fff;
  padding: 30px 20px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 700;
  margin: 0;
`;

const Content = styled.div`
  text-align: right;
`;

const Place = styled.div``;

const Time = styled.div``;

const Weather = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 120px;
  height: 110px;

  fill: yellow;
`;

const Forecast = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Picture = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Description = styled.div`
  text-transform: capitalize;
`;

const Info = ({ name, country, currentStatus }) => {
  const currentTime = format(new Date(), 'hh:mm a');
  const weather = currentStatus.weather[0];
  const { description } = weather;
  const picture = currentTime.indexOf('am') > 0 ? sun : moon;

  return (
    <StInfo>
      <Header>
        <Title>{name}</Title>
        <Content>
          <Place>{country}</Place>
          <Time>{currentTime}</Time>
        </Content>
      </Header>
      <Weather>
        <Icon src={icons[description]} />
      </Weather>
      <Forecast>
        <Picture src={picture} />
        <Description>{description}</Description>
      </Forecast>
    </StInfo>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  currentStatus: PropTypes.shape({
    weather: PropTypes.array.isRequired
  }).isRequired
};

export default Info;
