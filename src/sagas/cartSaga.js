import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadCart() {
  try {
    const res = yield call(axiosInstance.get, '660/cart');
    yield put({ type: 'LOAD_CART_SUCCESS', payload: res });
  } catch (error) {
    yield put({ type: 'LOAD_CART_FAIL', payload: error });
  }
}

function* addCart({ payload }) {
  try {
    const res = yield call(axiosInstance.post, '660/cart', {
      productId: payload.id,
      quantity: 1,
    });
    yield put({ type: 'ADD_CART_SUCCESS', payload: res });
  } catch (error) {
    yield put({ type: 'ADD_CART_FAIL', payload: error });
  }
}

function* updateCart({ payload }) {
  try {
    const res = yield call(
      axiosInstance.put,
      `660/cart/${payload.id}`,
      payload,
    );

    yield put({ type: 'UPDATE_CART_SUCCESS', payload: res });
  } catch (error) {
    yield put({ type: 'UPDATE_CART_FAIL', payload: error });
  }
}

function* deleteCart({ payload }) {
  try {
    yield call(axiosInstance.delete, `660/cart/${payload.id}`, payload);
    yield put({ type: 'DELETE_CART_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'DELETE_CART_FAIL', payload: error });
  }
}

function* loadProducts() {
  try {
    const res = yield call(axiosInstance.get, '660/products');
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res });
  } catch (error) {
    yield put({ type: 'LOAD_PRODUCTS_FAIL', payload: error });
  }
}

function* loadData() {
  yield take('LOAD_PRODUCTS_REQUEST');
  yield fork(loadProducts);
  yield take('LOAD_CART_REQUEST');
  yield fork(loadCart);
  // yield takeLatest('LOAD_PRODUCTS_REQUEST', loadProducts);
  // yield takeLatest('LOAD_CART_REQUEST', loadCart);
}

function* addCartRequest() {
  yield takeLeading('ADD_CART_REQUEST', addCart);
}

function* updateCartRequest() {
  yield takeLeading('UPDATE_CART_REQUEST', updateCart);
}

function* deleteCartRequest() {
  yield takeLeading('DELETE_CART_REQUEST', deleteCart);
}

export default function* rootCart() {
  yield all([
    fork(loadData),
    fork(addCartRequest),
    fork(updateCartRequest),
    fork(deleteCartRequest),
  ]);
}
