import {TouchableOpacityProps} from 'react-native';

export type WeatherViewProps = {
  activeDegreeStyles?: TouchableOpacityProps['style'];
  selectCelsiusOnPress?: TouchableOpacityProps['onPress'];
  selectFahrenheitOnPress?: TouchableOpacityProps['onPress'];
};
