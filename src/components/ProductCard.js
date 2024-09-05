import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-full  rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500 mt-1">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
