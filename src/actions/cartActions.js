import axiosInstance from '../utils/axiosInstance';

export const addToCart = product => async dispatch => {
  try {
    dispatch({ type: 'ADD_CART_REQUEST' });
    const res = await axiosInstance.post('660/cart', {
      productId: product.id,
      quantity: 1,
    });
    dispatch({ type: 'ADD_CART_SUCCESS', payload: res });
  } catch (error) {
    dispatch({ type: 'ADD_CART_FAIL', payload: error });
  }
};

export const updateCart = cart => async dispatch => {
  try {
    dispatch({ type: 'UPDATE_CART_REQUEST' });
    const res = await axiosInstance.put(`660/cart/${cart.id}`, cart);
    dispatch({ type: 'UPDATE_CART_SUCCESS', payload: res });
  } catch (error) {
    dispatch({ type: 'UPDATE_CART_FAIL', payload: error });
  }
};

export const deleteCart = cart => async dispatch => {
  try {
    dispatch({ type: 'DELETE_CART_REQUEST' });
    await axiosInstance.delete(`660/cart/${cart.id}`, cart);
    dispatch({ type: 'DELETE_CART_SUCCESS', payload: cart });
  } catch (error) {
    dispatch({ type: 'DELETE_CART_FAIL', payload: error });
  }
};

export const loadCart = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_CART_REQUEST' });
    const res = await axiosInstance.get('660/cart');
    dispatch({ type: 'LOAD_CART_SUCCESS', payload: res });
  } catch (error) {
    dispatch({ type: 'LOAD_CART_FAIL', payload: error });
  }
};
