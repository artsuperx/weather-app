import React from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StInfo = styled.div`
  background-color: #2caaef;
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

const Description = styled.div`
  text-transform: capitalize;
`;

const Info = ({ name, country, currentStatus }) => {
  const currentTime = format(new Date(), 'hh:mm a');
  const weather = currentStatus.weather[0];
  const { description, icon } = weather;

  return (
    <StInfo>
      <Header>
        <Title>{name}</Title>
        <Content>
          <Place>{country}</Place>
          <Time>{currentTime}</Time>
        </Content>
      </Header>
      <Description>{description}</Description>
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
