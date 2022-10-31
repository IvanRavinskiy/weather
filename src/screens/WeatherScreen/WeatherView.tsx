import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {weatherScreenStyles} from './styles';
import {WeatherPropertyCard} from '../../components/WeatherPropertyCard';
import Pointer from '../../../assets/pointer.svg';
import Cloud from '../../../assets/cloud.svg';
import {WeatherViewProps} from './types';
import {ToggleTemp} from '../../components/ToggleTemp';
import {InputCity} from '../../components/InputCity';

export const WeatherView: FC<WeatherViewProps> = props => {
  const {
    city = '',
    temp = 0,
    wind = 0,
    pressure = 0,
    humidity = 0,
    description = '',
    changeCityOnPress,
    getMyPositionOnPress,
    setActiveTemp,
    modalVisible,
    setModalVisible,
  } = props;

  return (
    <SafeAreaView style={weatherScreenStyles.rootContainer}>
      <View>
        <InputCity
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <View style={weatherScreenStyles.topHeaderContainer}>
          <Text style={weatherScreenStyles.city}>{city}</Text>
          <View style={weatherScreenStyles.mainDegreeContainer}>
            <Text style={weatherScreenStyles.degreeSymbol}>º</Text>
            <ToggleTemp setActiveTemp={setActiveTemp} />
          </View>
        </View>
        <View style={weatherScreenStyles.bottomHeaderContainer}>
          <TouchableOpacity onPress={changeCityOnPress}>
            <Text style={weatherScreenStyles.title}>Change city</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={getMyPositionOnPress}
            style={weatherScreenStyles.positionContainer}>
            <Pointer style={weatherScreenStyles.positionIcon} />
            <Text style={weatherScreenStyles.title}>My position</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={weatherScreenStyles.currentWeatherContainer}>
          <Cloud height={120} width={120} />
          <Text style={weatherScreenStyles.currentDegrees}>{temp}º</Text>
        </View>
        <Text style={weatherScreenStyles.currentWeather}>{description}</Text>
      </View>
      <View>
        <View style={weatherScreenStyles.bottomContainerRow}>
          <WeatherPropertyCard property={'Wind'} index={`${wind} m/s, west`} />
          <WeatherPropertyCard
            property={'Pressure'}
            index={`${pressure} hPa`}
          />
        </View>
        <View style={weatherScreenStyles.bottomContainerRow}>
          <WeatherPropertyCard property={'Humidity'} index={`${humidity}%`} />
          <WeatherPropertyCard property={'Chance of rain'} index={'10%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
