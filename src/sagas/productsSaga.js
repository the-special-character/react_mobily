import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadProducts() {
  try {
    const res = yield call(axiosInstance.get, '660/products');
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res });
  } catch (error) {
    yield put({ type: 'LOAD_PRODUCTS_FAIL', payload: error });
  }
}

function* loadProductsRequest() {
  yield takeLatest('LOAD_PRODUCTS_REQUEST', loadProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest)]);
}
