import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../../constants';

type WeatherScreenStyles = {
  rootContainer: ViewStyle;
};

export const weatherScreenStyles = StyleSheet.create<WeatherScreenStyles>({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.CERULEAN_FROST,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
  },
});
