import {ActiveTemp} from '../screens/WeatherScreen/types';

export const activeTempUnit = (temp: number, value: ActiveTemp) => {
  return value === 'C' ? Math.round(temp) : Math.round(temp * 1.8) + 32;
};
