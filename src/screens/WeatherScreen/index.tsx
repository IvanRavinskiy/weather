import React, {useState} from 'react';
import {WeatherView} from './WeatherView';
import {activeStyles} from '../../constants';

export const WeatherScreen = () => {
  const [isActiveDegree, setIsActiveDegree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const activeDegreeStyles = isActiveDegree && activeStyles;

  const selectCelsius = () => {
    setIsActiveDegree(!isActiveDegree);
  };

  const selectFahrenheit = () => {
    setIsActiveDegree(!isActiveDegree);
  };

  const changeCityOnPress = () => {
    setModalVisible(true);
  };
  const selectCityOnPress = () => {
    setModalVisible(false);
  };

  return (
    <WeatherView
      modalVisible={modalVisible}
      changeCityOnPress={changeCityOnPress}
      selectCityOnPress={selectCityOnPress}
      selectCelsiusOnPress={selectCelsius}
      selectFahrenheitOnPress={selectFahrenheit}
      activeDegreeStyles={activeDegreeStyles}
    />
  );
};
