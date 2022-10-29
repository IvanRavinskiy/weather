import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILIES, FONT_WEIGHTS} from '../../constants';

type WeatherScreenStyles = {
  rootContainer: ViewStyle;
  modalContainer: ViewStyle;
  topHeaderContainer: ViewStyle;
  mainDegreeContainer: ViewStyle;
  city: TextStyle;
  switchDegreeContainer: ViewStyle;
  positionContainer: ViewStyle;
  positionIcon: ViewStyle;
  degreeSymbol: TextStyle;
  degree: TextStyle;
  degreeContainer: ViewStyle;
  title: TextStyle;
  bottomHeaderContainer: ViewStyle;
  currentWeatherContainer: ViewStyle;
  currentDegrees: TextStyle;
  currentWeather: TextStyle;
  bottomContainerRow: ViewStyle;
};

export const weatherScreenStyles = StyleSheet.create<WeatherScreenStyles>({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.CERULEAN_FROST,
    paddingHorizontal: '5%',
    paddingTop: '10%',
    paddingBottom: '5%',
    justifyContent: 'space-between',
  },
  modalContainer: {
    marginTop: '15%',
    marginHorizontal: '5%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginHorizontal: '5%',
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
  bottomContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
