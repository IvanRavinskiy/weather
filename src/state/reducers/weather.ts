import {createSlice} from '@reduxjs/toolkit';
import {SLICES, WEATHER} from '../../constants';

type WeatherState = {
  city: string;
  isLoading: boolean;
  data: null | any;
};

const SLICE_INITIAL: WeatherState = {
  city: '',
  isLoading: false,
  data: null,
};

const weatherSlice = createSlice({
  name: SLICES.WEATHER,
  initialState: SLICE_INITIAL,
  reducers: {
    [WEATHER.GET_WEATHER](state, action) {
      state.city = action.payload;
      state.isLoading = true;
    },
    [WEATHER.WEATHER_SUCCESS](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const {actions, reducer: weatherReducer} = weatherSlice;
export const {GET_WEATHER, WEATHER_SUCCESS} = weatherSlice.actions;
