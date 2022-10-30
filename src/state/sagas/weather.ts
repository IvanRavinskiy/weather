import {call, put, select} from 'redux-saga/effects';
import {getCity} from '../selectors/city';
import {createAPI} from '../../utils/createAPI';
import {WEATHER_SUCCESS} from '../reducers/weather';

export function* weather() {
  const city = yield select(getCity);
  const data = yield call(createAPI, city);
  yield put(WEATHER_SUCCESS(data));
}
