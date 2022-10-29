import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {WeatherPropertyCardProps} from './types';
import {useWeatherPropertyCardStyles} from './styles';

export const WeatherPropertyCard: FC<WeatherPropertyCardProps> = props => {
  const {property, index} = props;

  const weatherPropertyCardStyles = useWeatherPropertyCardStyles();

  return (
    <View style={weatherPropertyCardStyles.propertyCard}>
      <Text style={weatherPropertyCardStyles.property}>{property}</Text>
      <Text style={weatherPropertyCardStyles.index}>{index}</Text>
    </View>
  );
};
