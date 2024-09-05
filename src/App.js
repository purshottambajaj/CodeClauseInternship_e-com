import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './components/Cart'; 
import { CartProvider } from './context/CartContext';  // Ensure correct import

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />  {/* Correct component */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
