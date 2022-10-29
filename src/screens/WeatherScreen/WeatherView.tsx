import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {weatherScreenStyles} from './styles';
import {WeatherPropertyCard} from '../../components/WeatherPropertyCard';
import Pointer from '../../../assets/pointer.svg';
import Cloud from '../../../assets/cloud.svg';
import {WeatherViewProps} from './types';

export const WeatherView: FC<WeatherViewProps> = props => {
  const {activeDegreeStyles, selectFahrenheitOnPress, selectCelsiusOnPress} =
    props;

  return (
    <SafeAreaView style={weatherScreenStyles.rootContainer}>
      <View>
        <View style={weatherScreenStyles.topHeaderContainer}>
          <Text style={weatherScreenStyles.city}>Omsk</Text>
          <View style={weatherScreenStyles.mainDegreeContainer}>
            <Text style={weatherScreenStyles.degreeSymbol}>º</Text>
            <View style={weatherScreenStyles.switchDegreeContainer}>
              <TouchableOpacity
                onPress={selectCelsiusOnPress}
                style={[
                  weatherScreenStyles.degreeContainer,
                  activeDegreeStyles,
                ]}>
                <Text style={weatherScreenStyles.degree}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={selectFahrenheitOnPress}
                style={[
                  weatherScreenStyles.degreeContainer,
                  activeDegreeStyles,
                ]}>
                <Text style={weatherScreenStyles.degree}>F</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={weatherScreenStyles.bottomHeaderContainer}>
          <TouchableOpacity>
            <Text style={weatherScreenStyles.title}>Change city</Text>
          </TouchableOpacity>
          <TouchableOpacity style={weatherScreenStyles.positionContainer}>
            <Pointer style={weatherScreenStyles.positionIcon} />
            <Text style={weatherScreenStyles.title}>My position</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={weatherScreenStyles.currentWeatherContainer}>
          <Cloud height={120} width={120} />
          <Text style={weatherScreenStyles.currentDegrees}>14º</Text>
        </View>
        <Text style={weatherScreenStyles.currentWeather}>Rain</Text>
      </View>
      <View>
        <View style={weatherScreenStyles.bottomContainerRow}>
          <WeatherPropertyCard property={'Wind'} index={'5m/s west'} />
          <WeatherPropertyCard property={'Pressure'} index={'754 mm'} />
        </View>
        <View style={weatherScreenStyles.bottomContainerRow}>
          <WeatherPropertyCard property={'Humidity'} index={'60%'} />
          <WeatherPropertyCard property={'Chance of rain'} index={'10%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
