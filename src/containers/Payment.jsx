import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import handleSumTotal from '../utils/handleSumTotal';
import { useNavigate } from 'react-router-dom';
import config from '../../config/index';
const Payment = () => {
  const history = useNavigate();
  const {
    addNewOrder,
    state: { cart, buyer },
  } = useContext(AppContext);
  const payPalOptions = {
    clientId: config.clientIdPaypal,
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    if (data === 'COMPLETED') {
      const newOrder = { buyer, product: cart, payment: data };
      addNewOrder(newOrder);
      history('/checkout/success');
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={payPalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
