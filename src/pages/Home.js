import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product 1', description: 'This is Product 1', price: 10, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwesAEguTfke4Ji5iiAhXNLNwzFFHuxJRktg&s' },
  { id: 2, name: 'Product 2', description: 'This is Product 2', price: 20, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZX2ldgwN9lhNEwbicgwPh-oHPwrwMKVc8Zw&s' },
  { id: 3, name: 'Product 3', description: 'This is Product 3', price: 30,
     image: 'https://www.textileinfomedia.com/img/cdfa/stylish-kids-big-boys-t-shirt-full.jpg' },
  { id: 4, name: 'Product 4', description: 'This is Product 4', price: 40,
      image: 'https://www.textileinfomedia.com/img/cdfa/stylish-kids-big-boys-t-shirt-full.jpg' },   
  
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
