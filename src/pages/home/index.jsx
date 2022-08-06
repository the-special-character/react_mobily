import React, { lazy, Suspense, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { connect } from 'react-redux';
import { loadProducts } from '../../actions/productsActions';
import {
  addToCart,
  deleteCart,
  loadCart,
  updateCart,
} from '../../actions/cartActions';
// import ActionButtons from '../../components/actionButtons';

const ActionButtons = lazy(() => import('../../components/actionButtons'));

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Home = ({
  products,
  loadProducts,
  addToCart,
  loadCart,
  updateCart,
  deleteCart,
  cart,
}) => {
  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {products.map(product => {
        const cartItem = cart.find(x => x.productId === product.id);

        return (
          <div
            key={product.id}
            className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8"
          >
            <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-3">
              <img
                src={product.image}
                alt={product.title}
                className="object-center object-cover"
              />
            </div>
            <div className="sm:col-span-9">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                {product.title}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading">{product.description}</h3>

                <p className="text-2xl text-gray-900">
                  {new Intl.NumberFormat('en-IN', {
                    currency: 'INR',
                    style: 'currency',
                  }).format(product.price)}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map(rating => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating.rate > rating
                              ? 'text-gray-900'
                              : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0',
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {product.rating.rate} out of 5 stars
                    </p>
                    <a
                      href="#reviews"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.rating.count} reviews
                    </a>
                  </div>
                </div>
              </section>

              <div className="mt-6">
                {cartItem ? (
                  <Suspense fallback={<div>loading...</div>}>
                    <ActionButtons
                      cartItem={cartItem}
                      deleteCart={deleteCart}
                      updateCart={updateCart}
                    />
                  </Suspense>
                ) : (
                  <button
                    type="submit"
                    className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => addToCart(product)}
                  >
                    Add to bag
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => loadProducts()(dispatch),
  loadCart: () => loadCart()(dispatch),
  addToCart: product => addToCart(product)(dispatch),
  updateCart: cart => updateCart(cart)(dispatch),
  deleteCart: cart => deleteCart(cart)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
