import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {toggleTempStyles} from './styles';
import {COLORS} from '../../constants';
import {ActiveTemp} from '../../screens/WeatherScreen/types';

type ToggleTempProps = {
  setActiveTemp: (temp: ActiveTemp) => void;
};

export const ToggleTemp: FC<ToggleTempProps> = props => {
  const {setActiveTemp} = props;
  const [isCelsius, setIsCelsius] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const selectCelsius = () => {
    setIsCelsius(true);
    setIsFahrenheit(false);
    setActiveTemp('C');
  };

  const selectFahrenheit = () => {
    setIsCelsius(false);
    setIsFahrenheit(true);
    setActiveTemp('F');
  };

  const activeStyles = {
    backgroundColor: COLORS.CERULEAN_FROST,
    opacity: 0.2,
  };

  return (
    <View style={toggleTempStyles.switchDegreeContainer}>
      <TouchableOpacity
        onPress={selectCelsius}
        style={
          !isCelsius
            ? [toggleTempStyles.degreeContainer, activeStyles]
            : toggleTempStyles.degreeContainer
        }>
        <Text style={toggleTempStyles.degree}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectFahrenheit}
        style={
          !isFahrenheit
            ? [toggleTempStyles.degreeContainer, activeStyles]
            : toggleTempStyles.degreeContainer
        }>
        <Text style={toggleTempStyles.degree}>F</Text>
      </TouchableOpacity>
    </View>
  );
};
