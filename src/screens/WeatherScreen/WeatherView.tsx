import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {weatherScreenStyles} from './styles';
import {WeatherPropertyCard} from '../../components/WeatherPropertyCard';

export const WeatherView = () => {
  return (
    <SafeAreaView style={weatherScreenStyles.rootContainer}>
      <View>
        <View style={weatherScreenStyles.topHeaderContainer}>
          <Text style={weatherScreenStyles.city}>Omsk</Text>
          <View style={weatherScreenStyles.mainDegreeContainer}>
            <Text style={weatherScreenStyles.degreeSymbol}>º</Text>
            <View style={weatherScreenStyles.switchDegreeContainer}>
              <TouchableOpacity style={weatherScreenStyles.degreeContainer}>
                <Text style={weatherScreenStyles.degree}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={weatherScreenStyles.degreeContainer}>
                <Text style={weatherScreenStyles.degree}>C</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={weatherScreenStyles.bottomHeaderContainer}>
          <TouchableOpacity>
            <Text style={weatherScreenStyles.title}>Change city</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={weatherScreenStyles.title}>My position</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
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
