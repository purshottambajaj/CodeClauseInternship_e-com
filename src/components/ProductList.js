import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-gray-900 mt-4">${product.price}</p>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
