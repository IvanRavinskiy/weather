import {RootState} from '..';

export const getError = (state: RootState) => {
  return state.weather.error;
};
