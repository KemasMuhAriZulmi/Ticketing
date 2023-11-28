// src/pages/Payment.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import PaymentForm from '../components/PaymentForm';
import Loader from '../components/Loader';
import ToastNotification from '../components/ToastNotification';
// import PrivateRoute from '../components/PrivateRoute'; // Import PrivateRoute

const Payment = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  // const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const validateForm = () => {
    const { cardNumber, expirationDate, cvv } = formData;
    if (!cardNumber || !expirationDate || !cvv) {
      showToastNotification('Please fill in all required fields.');
      return false;
    }
    const {transferTransactio} = transfer
    if(!transferTransactio ){
      showToastNotification("Please Upload Transfer Receipt")
      return false
    }


    return true;
  };

  const handlePayment = () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Send payment data to the backend
    axios.post(`/events/${id}/payments`, formData)
      .then(response => {
        console.log('Payment successful!', response.data);
        showToastNotification('Payment successful!');
        // Redirect to confirmation page
        history.push('/confirmation');
      })
      .catch(error => {
        console.error('Payment error:', error);
        showToastNotification('Payment failed. Please try again.');
        // Handle payment error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      {!isLoggedIn && (
        <p className="mb-4 text-red-500">Please log in to proceed with the payment.</p>
      )}
      {isLoggedIn && (
        <React.Fragment>
          {loading && <Loader />}
          {showToast && <ToastNotification message={toastMessage} onClose={() => setShowToast(false)} />}
          {!loading && (
            <React.Fragment>
              <PaymentForm
                formData={formData}
                onChange={handleInputChange}
                onSubmit={handlePayment}
              />
              <button
                onClick={handleGoBack}
                className="bg-gray-500 text-white p-2 mt-4 inline-block"
              >
                Go Back
              </button>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Payment;
