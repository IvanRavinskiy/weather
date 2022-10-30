import React from 'react';
import {WeatherScreen} from './src/screens/WeatherScreen';
import {Provider} from 'react-redux';
import {store} from './src/state';

export const App = () => {
  return (
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
  );
};
