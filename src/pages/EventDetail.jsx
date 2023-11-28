import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "../axios";

const EventDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState(null);
  const [purchaseData, setPurchaseData] = useState({
    quantity: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`/events/${id}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handlePurchaseChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData({ ...purchaseData, [name]: value });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    // Implement purchase logic here
    if (purchaseData.quantity <= 0) {
      setError("Please enter a valid quantity");
      handleOpenModal();
    } else {
      setError("");
      setPurchaseSuccess(true);
      console.log("Purchase data:", purchaseData);
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={event?.image}
          alt={event?.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">{event?.title}</h1>
          <p className="text-gray-500 mb-2">{event?.date}</p>
          <p className="mb-4">{event?.description}</p>
          <Link
            to={`/events/${id}/payment`}
            className="bg-blue-500 text-white py-2 px-4 inline-block"
          >
            Buy Ticket
          </Link>
          <button
            onClick={handleGoBack}
            className="bg-gray-500 text-white py-2 px-4 inline-block ml-2"
          >
            Go Back
          </button>
          <form onSubmit={handlePurchaseSubmit} className="mt-4">
            <label className="block">
              Quantity:
              <input
                type="number"
                name="quantity"
                value={purchaseData.quantity}
                onChange={handlePurchaseChange}
                className="border p-2 w-16 ml-2"
              />
            </label>
            <button
              type="button"
              onClick={handleOpenModal}
              className="bg-green-500 text-white py-2 px-4 inline-block ml-2"
            >
              Purchase
            </button>
          </form>
        </div>
      </div>

      {/* Modal for Validation Error or Purchase Success */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {purchaseSuccess ? "Purchase Successful" : "Error"}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {purchaseSuccess
                          ? "Thank you for your purchase!"
                          : error}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    handleCloseModal();
                    if (purchaseSuccess) {
                      // Redirect or perform additional actions after successful purchase
                      history.push("/events");
                    }
                  }}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {purchaseSuccess ? "Close" : "Try Again"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;