import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, calculateTotal, removeFromCart } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div
              key={item.id}
              className="border-b border-gray-200 py-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <p className="text-2xl font-semibold text-gray-800">Total: ${calculateTotal()}</p>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
