import React, {useEffect, useState} from 'react';
import {WeatherView} from './WeatherView';
import {activeStyles, DEFAULT_CITY} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_WEATHER} from '../../state/reducers/weather';
import {getWeather} from '../../state/selectors/weather';

export const WeatherScreen = () => {
  const [isActiveDegree, setIsActiveDegree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const weather = useAppSelector(getWeather);
  const city = weather?.name;
  const temp = Math.round(weather?.main.temp);
  const wind = Math.round(weather?.wind.speed);
  const pressure = Math.round(weather?.main.pressure);
  const humidity = weather?.main.humidity;
  const description = weather?.weather[0].description;

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

  const getWeatherOnPress = () => {};

  useEffect(() => {
    dispatch(GET_WEATHER(DEFAULT_CITY));
  }, []);

  return (
    <WeatherView
      city={city}
      temp={temp}
      wind={wind}
      pressure={pressure}
      humidity={humidity}
      description={description}
      getMyPositionOnPress={getWeatherOnPress}
      modalVisible={modalVisible}
      changeCityOnPress={changeCityOnPress}
      selectCityOnPress={selectCityOnPress}
      selectCelsiusOnPress={selectCelsius}
      selectFahrenheitOnPress={selectFahrenheit}
      activeDegreeStyles={activeDegreeStyles}
    />
  );
};
