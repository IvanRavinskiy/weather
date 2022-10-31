import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILIES, FONT_WEIGHTS} from '../../constants';

type ToggleTempStyles = {
  switchDegreeContainer: ViewStyle;
  degree: TextStyle;
  degreeContainer: ViewStyle;
};

export const toggleTempStyles = StyleSheet.create<ToggleTempStyles>({
  switchDegreeContainer: {
    marginLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 77,
    height: 29,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.SPANISH_GRAY,
  },
  degree: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILIES.LATO_REGULAR,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.BOLD,
    lineHeight: 21.6,
  },
  degreeContainer: {
    backgroundColor: COLORS.WHITE_WITH_OPACITY,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
