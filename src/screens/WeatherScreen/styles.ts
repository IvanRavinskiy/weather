import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILIES, FONT_WEIGHTS} from '../../constants';

type WeatherScreenStyles = {
  rootContainer: ViewStyle;
  headerContainer: ViewStyle;
  topHeaderContainer: ViewStyle;
  mainDegreeContainer: ViewStyle;
  city: TextStyle;
  positionContainer: ViewStyle;
  positionIcon: ViewStyle;
  degreeSymbol: TextStyle;
  title: TextStyle;
  bottomHeaderContainer: ViewStyle;
  currentWeatherContainer: ViewStyle;
  currentDegrees: TextStyle;
  currentWeather: TextStyle;
  footerContainerRow: ViewStyle;
  cardsRowContainerRow: ViewStyle;
};

export const weatherScreenStyles = StyleSheet.create<WeatherScreenStyles>({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.CERULEAN_FROST,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  topHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainDegreeContainer: {
    flexDirection: 'row',
  },
  city: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILIES.LATO_REGULAR,
    fontSize: 30,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: 36,
  },
  positionContainer: {
    flexDirection: 'row',
  },
  positionIcon: {
    left: -10,
  },
  degreeSymbol: {
    paddingTop: '1.3%',
    color: COLORS.WHITE,
    opacity: 0.4,
    fontFamily: FONT_FAMILIES.LATO_REGULAR,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: 21.6,
  },
  title: {
    color: COLORS.WHITE,
    opacity: 0.4,
    fontFamily: FONT_FAMILIES.LATO_REGULAR,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: 21.6,
  },
  bottomHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 19,
  },
  currentWeatherContainer: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    alignItems: 'center',
  },
  currentDegrees: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILIES.PTSANS_REGULAR,
    fontSize: 120,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: 155,
    textAlign: 'center',
    paddingStart: 15,
  },
  currentWeather: {
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILIES.LATO_REGULAR,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.NORMAL,
    lineHeight: 21.6,
    textAlign: 'center',
  },
  footerContainerRow: {
    marginBottom: '5%',
    marginHorizontal: '5%',
  },
  cardsRowContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
