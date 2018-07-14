import React, { Component } from 'react';
import styled from 'styled-components';

import Forecast from './Forecast';

const StApp = styled.div`
  height: 100vh;
  background: url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const API_URL =
  'http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&APPID=e36f1b16a70d7bb256b5cf614d5ed572';

class App extends Component {
  state = {
    forecast: [],
    isFetching: true,
    err: false
  };

  componentWillMount() {
    localStorage.getItem('forecast') &&
      this.setState({
        forecast: JSON.parse(localStorage.getItem('forecast')),
        isFetching: false
      });
  }

  componentDidMount() {
    if (!localStorage.getItem('forecast')) {
      this.fetchData();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('forecast', JSON.stringify(nextState.forecast));
    localStorage.setItem('forecastDate', Date.now());
  }

  fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(forecast =>
        this.setState(prevState => ({ forecast, isFetching: false }))
      )
      .catch(err =>
        this.setState(prevState => ({
          isFetching: false,
          err: true
        }))
      );
  };

  render() {
    const { forecast, err, isFetching } = this.state;

    return (
      <StApp>
        {isFetching ? (
          <div>Loading..</div>
        ) : (
          <Forecast forecast={forecast} err={err} />
        )}
      </StApp>
    );
  }
}

export default App;
