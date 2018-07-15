import clearSky from './clear-sky.svg';
import fewClouds from './few-clouds.svg';
import scatteredClouds from './scattered-clouds.svg';
import brokenClouds from './broken-clouds.svg';
import showerRain from './shower-rain.svg';
import rain from './rain.svg';
import thunderstorm from './thunderstorm.svg';
import snow from './snow.svg';

export default {
  'clear sky': {
    weather: clearSky,
    color: 'rgba(209, 85, 100, 0.8);'
  },
  'few clouds': {
    weather: fewClouds,
    color: 'rgba(44, 170, 239, 0.5);'
  },
  'scattered clouds': {
    weather: scatteredClouds,
    color: 'rgba(58, 234, 214, 0.5);'
  },
  'broken clouds': {
    weather: brokenClouds,
    color: 'rgb(96, 99, 99, 0.9);'
  },
  'shower rain': {
    weather: showerRain,
    color: 'rgb(146, 163, 146, 0.7);'
  },
  rain: {
    weather: rain,
    color: 'rgb(146, 163, 146, 0.7);'
  },
  'light rain': {
    weather: showerRain,
    color: 'rgb(146, 163, 146, 0.7);'
  },
  'moderate rain': {
    weather: showerRain,
    color: 'rgb(146, 163, 146, 0.4);'
  },
  thunderstorm: {
    weather: thunderstorm,
    color: 'rgb(7, 35, 32, 0.6);'
  },
  snow: {
    weather: snow,
    color: 'rgb(242, 249, 249, 0.42);'
  }
};
