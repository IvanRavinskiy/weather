import {ModalProps, TouchableOpacityProps} from 'react-native';

export type ActiveTemp = 'C' | 'F';

export type WeatherViewProps = {
  city?: string;
  temp?: number;
  wind?: number;
  pressure?: number;
  humidity?: number;
  description?: string;
  changeCityOnPress?: TouchableOpacityProps['onPress'];
  getMyPositionOnPress?: TouchableOpacityProps['onPress'];
  setActiveTemp: (temp: ActiveTemp) => void;
  modalVisible: ModalProps['visible'];
  setModalVisible: (isOpen: boolean) => void;
};
