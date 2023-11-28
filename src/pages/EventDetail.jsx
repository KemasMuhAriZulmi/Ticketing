// Import statements...
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../axios";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [purchaseData, setPurchaseData] = useState({
    quantity: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4500/transaction/whatevents/${id}`)
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
      {event && (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-500 mb-2">{event.date}</p>
            <p className="mb-4">{event.description}</p>
            <Link
              to={`/event-detail/${id}`}
              className="bg-blue-500 text-white py-2 px-4 inline-block"
            >
              Buy Ticket
            </Link>
            <Link
              to={"/"}
              onClick={handleGoBack}
              className="bg-gray-500 text-white py-2 px-4 inline-block ml-2"
            >
              Go Back
            </Link>

            <h2 className="text-xl font-bold mt-4">Tickets Available:</h2>
            <ul>
              {event.tickets &&
                event.tickets.map((ticket) => (
                  <li key={ticket.id}>
                    <p>{ticket.type}</p>
                    <p>Price: {ticket.price}</p>
                    {/* Add more details about the ticket */}
                  </li>
                ))}
            </ul>

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
      )}

      {/* Modal for Validation Error or Purchase Success */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          {/* ... (existing code) */}
        </div>
      )}
    </div>
  );
};

export default EventDetail;
