import React, {useState} from 'react';
import {WeatherView} from './WeatherView';
import {activeStyles} from '../../constants';
import {useAppDispatch} from '../../state';
import {GET_WEATHER} from '../../state/reducers/weather';

export const WeatherScreen = () => {
  const [isActiveDegree, setIsActiveDegree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

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

  const getWeather = () => {
    dispatch(GET_WEATHER('Minsk'));
  };

  return (
    <WeatherView
      getMyPositionOnPress={getWeather}
      modalVisible={modalVisible}
      changeCityOnPress={changeCityOnPress}
      selectCityOnPress={selectCityOnPress}
      selectCelsiusOnPress={selectCelsius}
      selectFahrenheitOnPress={selectFahrenheit}
      activeDegreeStyles={activeDegreeStyles}
    />
  );
};
