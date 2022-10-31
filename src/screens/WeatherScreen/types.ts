import {
  ModalProps,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';

export type WeatherViewProps = {
  city?: string;
  temp?: number;
  wind?: number;
  pressure?: number;
  humidity?: number;
  description?: string;
  showError?: boolean;
  error?: TextProps['children'];
  inputCity?: TextInputProps['value'];
  cityInputOnChange?: TextInputProps['onChangeText'];
  selectCelsiusOnPress?: TouchableOpacityProps['onPress'];
  selectFahrenheitOnPress?: TouchableOpacityProps['onPress'];
  modalVisible?: ModalProps['visible'];
  changeCityOnPress?: TouchableOpacityProps['onPress'];
  selectCityOnPress?: TouchableOpacityProps['onPress'];
  getMyPositionOnPress?: TouchableOpacityProps['onPress'];
  isCelsiusToggle?: boolean;
  isFahrenheitToggle?: boolean;
};
