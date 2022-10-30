import {ModalProps, TouchableOpacityProps} from 'react-native';

export type WeatherViewProps = {
  activeDegreeStyles?: TouchableOpacityProps['style'];
  selectCelsiusOnPress?: TouchableOpacityProps['onPress'];
  selectFahrenheitOnPress?: TouchableOpacityProps['onPress'];
  modalVisible?: ModalProps['visible'];
  changeCityOnPress?: TouchableOpacityProps['onPress'];
  selectCityOnPress?: TouchableOpacityProps['onPress'];
  getMyPositionOnPress?: TouchableOpacityProps['onPress'];
};
