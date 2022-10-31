import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {toggleTempStyles} from './styles';
import {COLORS} from '../../constants';

type ToggleTempProps = {
  isCelsius: boolean;
  isFahrenheit: boolean;
  selectCelsiusOnPress: TouchableOpacityProps['onPress'];
  selectFahrenheitOnPress: TouchableOpacityProps['onPress'];
};

export const ToggleTemp: FC<ToggleTempProps> = props => {
  const {
    isCelsius,
    isFahrenheit,
    selectCelsiusOnPress,
    selectFahrenheitOnPress,
  } = props;

  const activeStyles = {
    backgroundColor: COLORS.CERULEAN_FROST,
    opacity: 0.2,
  };

  return (
    <View style={toggleTempStyles.switchDegreeContainer}>
      <TouchableOpacity
        onPress={selectCelsiusOnPress}
        style={
          !isCelsius
            ? [toggleTempStyles.degreeContainer, activeStyles]
            : toggleTempStyles.degreeContainer
        }>
        <Text style={toggleTempStyles.degree}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectFahrenheitOnPress}
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
