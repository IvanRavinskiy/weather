import {StyleSheet, ViewStyle} from 'react-native';
import {COLORS} from '../../constants';

type InputCityStyles = {
  modalContainer: ViewStyle;
};

export const inputCityStyles = StyleSheet.create<InputCityStyles>({
  modalContainer: {
    marginTop: '15%',
    marginHorizontal: '5%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
