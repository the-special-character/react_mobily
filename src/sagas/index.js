import { all, fork } from 'redux-saga/effects';
import rootCart from './cartSaga';

export default function* rootSaga() {
  yield all([fork(rootCart)]);
}
