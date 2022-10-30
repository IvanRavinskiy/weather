import {RootState} from '..';

export const getCity = (state: RootState) => {
  return state.weather.city;
};
