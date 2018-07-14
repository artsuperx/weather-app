import React, { Component } from 'react';

import Forecast from './components/Forecast';

const API_URL =
  'http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&APPID=e36f1b16a70d7bb256b5cf614d5ed572';

class App extends Component {
  state = {
    forecast: [],
    isFetching: true,
    err: false
  };

  componentDidMount() {
    this.fetchData();
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

    return isFetching ? (
      <div>Loading..</div>
    ) : (
      <Forecast forecast={forecast} err={err} />
    );
  }
}

export default App;
