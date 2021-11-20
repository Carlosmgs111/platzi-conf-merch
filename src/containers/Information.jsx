import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const history = useNavigate();
  const form = useRef(null);
  const handleSubmit = () => {
    console.log(FormData);
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Information contact: </h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido: </h3>
        {cart.map((item, index) => (
          <div className="Information-item" key={index}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;