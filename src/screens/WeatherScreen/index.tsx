import React, {useEffect, useState} from 'react';
import {WeatherView} from './WeatherView';
import {DEFAULT_CITY} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_WEATHER} from '../../state/reducers/weather';
import {getWeather} from '../../state/selectors/weather';
import {getError} from '../../state/selectors/error';
import {ActiveTemp} from './types';
import {toF} from '../../utils/toF';

export const WeatherScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [activeTemp, setActiveTemp] = useState<ActiveTemp>('C');

  const dispatch = useAppDispatch();

  const weather = useAppSelector(getWeather);
  const city = weather?.name;
  const temp =
    activeTemp === 'C'
      ? Math.round(weather?.main.temp)
      : toF(weather?.main.temp);
  const wind = Math.round(weather?.wind.speed);
  const pressure = Math.round(weather?.main.pressure);
  const humidity = weather?.main.humidity;
  const description = weather?.weather[0].description;

  let errorMessage = useAppSelector(getError);
  console.log('QQQ errorMessage', errorMessage);

  const changeCityOnPress = () => {
    setModalVisible(true);
  };

  const getMyPositionOnPress = () => {};

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
      getMyPositionOnPress={getMyPositionOnPress}
      changeCityOnPress={changeCityOnPress}
      setActiveTemp={setActiveTemp}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};
