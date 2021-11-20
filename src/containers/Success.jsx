import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  //const location = useGoogleAddress('1600 Pennsylvania Ave NW, Washington DC');
  const location = { lat: 4.60971, lng: -74.08175 };
  const {
    state: { buyer },
  } = useContext(AppContext);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
