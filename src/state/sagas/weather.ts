import {call, put, select} from 'redux-saga/effects';
import {getCity} from '../selectors/city';
import {createAPI} from '../../utils/createAPI';
import {WEATHER_DOWN, WEATHER_SUCCESS} from '../reducers/weather';
import {hide} from 'react-native-bootsplash';

export function* weather() {
  try {
    const city: string = yield select(getCity);
    const data: any = yield call(createAPI, city);
    yield put(WEATHER_SUCCESS(data));
    yield call(hide, {fade: true});
  } catch (err) {
    yield put(WEATHER_DOWN());
  }
}
