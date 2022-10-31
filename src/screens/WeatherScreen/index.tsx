import React, {useEffect, useState} from 'react';
import {WeatherView} from './WeatherView';
import {DEFAULT_CITY} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../state';
import {GET_WEATHER} from '../../state/reducers/weather';
import {getWeather} from '../../state/selectors/weather';
import {getError} from '../../state/selectors/error';

export const WeatherScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputCity, setInputCity] = useState('');
  const [isError, setIsError] = useState(false);

  const [isCelsius, setIsCelsius] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const dispatch = useAppDispatch();

  const weather = useAppSelector(getWeather);
  const city = weather?.name;
  const temp = Math.round(weather?.main.temp);
  const wind = Math.round(weather?.wind.speed);
  const pressure = Math.round(weather?.main.pressure);
  const humidity = weather?.main.humidity;
  const description = weather?.weather[0].description;

  let errorMessage = useAppSelector(getError);
  console.log('errorMessage', errorMessage);

  const selectCelsius = () => {
    setIsCelsius(true);
    setIsFahrenheit(false);
  };

  const selectFahrenheit = () => {
    setIsCelsius(false);
    setIsFahrenheit(true);
  };

  const changeCityOnPress = () => {
    setModalVisible(true);
  };

  const selectCityOnPress = () => {
    dispatch(GET_WEATHER(inputCity));
    if (isError) {
      setModalVisible(false);
      setInputCity('');
      setIsError(false);
    } else {
      setIsError(true);
      setInputCity('');
    }
  };

  const cityInputOnChange = (text: string) => {
    setInputCity(text);
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
      inputCity={inputCity}
      showError={isError}
      error={errorMessage}
      cityInputOnChange={cityInputOnChange}
      getMyPositionOnPress={getWeatherOnPress}
      modalVisible={modalVisible}
      changeCityOnPress={changeCityOnPress}
      selectCityOnPress={selectCityOnPress}
      isCelsiusToggle={isCelsius}
      isFahrenheitToggle={isFahrenheit}
      selectCelsiusOnPress={selectCelsius}
      selectFahrenheitOnPress={selectFahrenheit}
    />
  );
};
