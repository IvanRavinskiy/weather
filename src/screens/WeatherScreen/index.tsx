import React, {useState} from 'react';
import {WeatherView} from './WeatherView';
import {activeStyles} from '../../constants';

export const WeatherScreen = () => {
  const [isActiveDegree] = useState(false);

  const activeDegreeStyles = isActiveDegree && activeStyles;

  return <WeatherView activeDegreeStyles={activeDegreeStyles} />;
};
