import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Store</Link>
        <div>
          <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
