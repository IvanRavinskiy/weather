import React, {useEffect, useState} from 'react';
import {WeatherView} from './WeatherView';
import {DEFAULT_CITY} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_WEATHER} from '../../state/reducers/weather';
import {getWeather} from '../../state/selectors/weather';
import {getError} from '../../state/selectors/error';
import {ActiveTemp} from './types';

export const WeatherScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputCity, setInputCity] = useState('');

  const [activeTemp, setActiveTemp] = useState<ActiveTemp>('C');

  const dispatch = useAppDispatch();

  const weather = useAppSelector(getWeather);
  const city = weather?.name;
  const temp =
    activeTemp === 'C'
      ? Math.round(weather?.main.temp)
      : Math.round(weather?.main.temp * 1.8) + 32;
  const wind = Math.round(weather?.wind.speed);
  const pressure = Math.round(weather?.main.pressure);
  const humidity = weather?.main.humidity;
  const description = weather?.weather[0].description;

  let errorMessage = useAppSelector(getError);
  console.log('QQQ errorMessage', errorMessage);

  const changeCityOnPress = () => {
    setModalVisible(true);
  };

  const selectCityOnPress = () => {
    dispatch(GET_WEATHER(inputCity));
    setModalVisible(false);
    setInputCity('');
  };

  const cityInputOnChange = (text: string) => {
    setInputCity(text);
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
      inputCity={inputCity}
      cityInputOnChange={cityInputOnChange}
      getMyPositionOnPress={getMyPositionOnPress}
      modalVisible={modalVisible}
      changeCityOnPress={changeCityOnPress}
      selectCityOnPress={selectCityOnPress}
      setActiveTemp={setActiveTemp}
    />
  );
};
