import PropTypes from 'prop-types';
import React from 'react';

const ActionButtons = ({ updateCart, cartItem, deleteCart }) => (
  <div className="flex items-center">
    <button
      type="submit"
      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() =>
        updateCart({
          ...cartItem,
          quantity: cartItem.quantity + 1,
        })
      }
    >
      +
    </button>
    <span className="font-bold text-2xl px-5">{cartItem.quantity}</span>
    <button
      type="submit"
      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => {
        if (cartItem.quantity > 1) {
          updateCart({
            ...cartItem,
            quantity: cartItem.quantity - 1,
          });
        } else {
          deleteCart(cartItem);
        }
      }}
    >
      -
    </button>
  </div>
);

ActionButtons.propTypes = {
  updateCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    quantity: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default ActionButtons;
