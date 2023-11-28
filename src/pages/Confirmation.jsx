// src/pages/Confirmation.jsx
import React from 'react';
import Loader from '../components/Loader';
import ToastNotification from '../components/ToastNotification';
// import { useHistory } from 'react-router-dom';

const Confirmation = () => {
  const [loading, setLoading] = React.useState(true);
  const [toastMessage, setToastMessage] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  // const history = useHistory();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setToastMessage('Your purchase was successful!');
      setShowToast(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {showToast && (
            <ToastNotification message={toastMessage} onClose={() => setShowToast(false)} />
          )}
          <p>Your purchase was successful!</p>
          {/* Add more confirmation details as needed */}
          <button
            onClick={handleBackToHome}
            className="bg-blue-500 text-white p-2 mt-4 inline-block"
          >
            Back to Home
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Confirmation;
