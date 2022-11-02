import {
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import {COLORS, FONT_FAMILIES} from '../../constants';

type WeatherPropertyCardStyles = {
  propertyCard: ViewStyle;
  property: TextStyle;
  index: TextStyle;
};

export const useWeatherPropertyCardStyles = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return StyleSheet.create<WeatherPropertyCardStyles>({
    propertyCard: {
      backgroundColor: COLORS.CERULEAN_FROST,
      height: height / 9,
      width: width / 2.3,
      justifyContent: 'center',
    },
    property: {
      color: COLORS.WHITE,
      fontFamily: FONT_FAMILIES.LATO_REGULAR,
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 18,
    },
    index: {
      color: COLORS.WHITE,
      fontFamily: FONT_FAMILIES.LATO_REGULAR,
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 21.6,
    },
  });
};
