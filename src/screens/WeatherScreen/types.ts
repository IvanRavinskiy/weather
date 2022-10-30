import {ModalProps, TextInputProps, TouchableOpacityProps} from 'react-native';

export type WeatherViewProps = {
  city?: string;
  temp?: number;
  wind?: number;
  pressure?: number;
  humidity?: number;
  description?: string;
  inputCity?: TextInputProps['value'];
  cityInputOnChange?: TextInputProps['onChangeText'];
  activeDegreeStyles?: TouchableOpacityProps['style'];
  selectCelsiusOnPress?: TouchableOpacityProps['onPress'];
  selectFahrenheitOnPress?: TouchableOpacityProps['onPress'];
  modalVisible?: ModalProps['visible'];
  changeCityOnPress?: TouchableOpacityProps['onPress'];
  selectCityOnPress?: TouchableOpacityProps['onPress'];
  getMyPositionOnPress?: TouchableOpacityProps['onPress'];
};
