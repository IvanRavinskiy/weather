import {takeLatest} from 'redux-saga/effects';
import {GET_WEATHER} from '../reducers/weather';
import {weather} from './weather';

export function* rootSaga() {
  yield takeLatest(GET_WEATHER.type, weather);
}
