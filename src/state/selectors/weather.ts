import {RootState} from '..';

export const getWeather = (state: RootState) => {
  return state.weather.data;
};
