import React, {useState} from 'react';
import {WeatherView} from './WeatherView';
import {activeStyles} from '../../constants';

export const WeatherScreen = () => {
  const [isActiveDegree, setIsActiveDegree] = useState(false);

  const activeDegreeStyles = isActiveDegree && activeStyles;

  const selectCelsius = () => {
    setIsActiveDegree(!isActiveDegree);
  };

  const selectFahrenheit = () => {
    setIsActiveDegree(!isActiveDegree);
  };

  return (
    <WeatherView
      selectCelsiusOnPress={selectCelsius}
      selectFahrenheitOnPress={selectFahrenheit}
      activeDegreeStyles={activeDegreeStyles}
    />
  );
};
