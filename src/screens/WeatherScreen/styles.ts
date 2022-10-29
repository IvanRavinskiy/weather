import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../constants';

type WeatherScreenStyles = {
  rootContainer: ViewStyle;
  topHeaderContainer: ViewStyle;
  mainDegreeContainer: ViewStyle;
  city: TextStyle;
  switchDegreeContainer: ViewStyle;
  positionContainer: ViewStyle;
  positionIcon: ViewStyle;
  degreeSymbol: TextStyle;
  degreeActive: TextStyle;
  degreeActiveContainer: ViewStyle;
  degreeInactive: TextStyle;
  degreeInactiveContainer: ViewStyle;
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
  topHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainDegreeContainer: {
    flexDirection: 'row',
  },
  city: {
    color: COLORS.WHITE,
    // fontFamily: 'Lato', //add fond
    fontSize: 30,
    fontWeight: '400',
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
    // fontFamily: 'Lato', //add fond
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.6,
  },
  degreeActive: {
    color: COLORS.WHITE,
    // fontFamily: 'Lato', //add fond
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
  },
  degreeActiveContainer: {
    backgroundColor: COLORS.WHITE_WITH_OPACITY,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  degreeInactive: {
    color: COLORS.WHITE,
    // fontFamily: 'Lato', //add fond
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
  },
  degreeInactiveContainer: {
    backgroundColor: COLORS.CERULEAN_FROST,
    opacity: 0.2,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.WHITE,
    opacity: 0.4,
    // fontFamily: 'Lato', //add fond
    fontSize: 18,
    fontWeight: '400',
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
    // fontFamily: 'PT Sans', //add fond
    fontSize: 120,
    fontWeight: '400',
    lineHeight: 155,
    textAlign: 'center',
    paddingStart: 15,
  },
  currentWeather: {
    color: COLORS.WHITE,
    // fontFamily: 'Lato', //add fond
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.6,
    textAlign: 'center',
  },
  bottomContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
