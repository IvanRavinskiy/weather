import {ModalProps, TextInputProps, TouchableOpacityProps} from 'react-native';

export type ActiveTemp = 'C' | 'F';

export type WeatherViewProps = {
  city?: string;
  temp?: number;
  wind?: number;
  pressure?: number;
  humidity?: number;
  description?: string;
  inputCity?: TextInputProps['value'];
  cityInputOnChange?: TextInputProps['onChangeText'];
  modalVisible?: ModalProps['visible'];
  changeCityOnPress?: TouchableOpacityProps['onPress'];
  selectCityOnPress?: TouchableOpacityProps['onPress'];
  getMyPositionOnPress?: TouchableOpacityProps['onPress'];
  setActiveTemp: (temp: ActiveTemp) => void;
};
