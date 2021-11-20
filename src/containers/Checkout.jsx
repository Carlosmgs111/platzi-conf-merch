import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import handleSumTotal from '../utils/handleSumTotal';

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
  );
};

export default Checkout;
