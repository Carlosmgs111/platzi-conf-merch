import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';
import { Helmet } from 'react-helmet';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = React.useContext(AppContext);
  console.log({ cart });
  const handleRemove = (index) => () => {
    removeFromCart(cart[index]);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Product List - Paltzi Conf Merch</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TU_USER" />
        <meta name="twitter:creator" content="@TU_USER" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Platzi Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Platzi Conf Store" />
        <meta property="og:description" content="Platzi Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="Platzi Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.lenght > 0 ? (
            <h3>Lista de Pedidos: </h3>
          ) : (
            <h3>Sin pedidos... </h3>
          )}
          {cart.map((item, index) => (
            <div className="Checkout-item" key={index}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(index)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio total: {handleSumTotal(cart)}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Checkout;
