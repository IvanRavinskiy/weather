import {createSlice} from '@reduxjs/toolkit';
import {SLICES, WEATHER} from '../../constants';

type WeatherState = {
  city: string;
  isLoading: boolean;
  data: null | any;
  error: string;
};

const SLICE_INITIAL: WeatherState = {
  city: '',
  isLoading: false,
  data: null,
  error: '',
};

const weatherSlice = createSlice({
  name: SLICES.WEATHER,
  initialState: SLICE_INITIAL,
  reducers: {
    [WEATHER.GET_WEATHER](state, action) {
      state.city = action.payload;
      state.error = '';
      state.isLoading = true;
    },
    [WEATHER.WEATHER_SUCCESS](state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
    [WEATHER.WEATHER_DOWN](state) {
      state.error = 'Try it again!';
      state.isLoading = false;
    },
  },
});

export const {actions, reducer: weatherReducer} = weatherSlice;
export const {GET_WEATHER, WEATHER_SUCCESS, WEATHER_DOWN} =
  weatherSlice.actions;
