import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';

const Home = () => {
  console.log(initialState.products);
  console.log({ Products });
  return <Products products={initialState.products} />;
};

export default Home;
