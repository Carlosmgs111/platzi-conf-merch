import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import { Layout } from '../components/Layout';
import '../styles/components/App.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const { addToCart, removeFromCart, addToBuyer, addNewOrder, state } =
    useInitialState();
  return (
    <AppContext.Provider
      value={{ addToCart, removeFromCart, addToBuyer, addNewOrder, state }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            ></Route>
            <Route exact path="/checkout/payment" element={<Payment />}></Route>
            <Route exact path="/checkout/success" element={<Success />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
