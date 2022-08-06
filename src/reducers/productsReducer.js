const initialState = [];

export default (state = initialState, { type, payload }) => {
  console.log('products reducer', type);

  switch (type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return payload;

    default:
      return state;
  }
};
