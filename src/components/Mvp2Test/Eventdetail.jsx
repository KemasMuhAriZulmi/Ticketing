import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import ButtonRegister from "../../components/Button-Register";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/slice/cartSlice";

const EventDetail = () => {
  const navigate = useNavigate();
  const [ticketCounts, setTicketCounts] = useState({});
  const [isEvent, setInEvent] = useState("");
  const [isLocation, setInLocation] = useState("");
  const [listTicket, setTicket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log("cek reducer: " + state.cartSlice);
    return state.cartSlice;
  });

  console.log(data);

  const urlParams = useParams();

  const handleDecrement = (ticketIndex) => {
    if (ticketCounts[ticketIndex] > 0) {
      setTicketCounts((prevCounts) => ({
        ...prevCounts,
        [ticketIndex]: prevCounts[ticketIndex] - 1,
      }));
    }
  };

  const handleIncrement = (ticketIndex) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketIndex]: (prevCounts[ticketIndex] || 0) + 1,
    }));
  };

  const handleInputChange = (ticketIndex, value) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [ticketIndex]: value,
    }));
  };

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/transaction/whatevents/${urlParams.id}`
        );
        setInEvent(response.data.name);
        setInLocation(response.data.location);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };
    fetchEventDetails();
  }, [urlParams.id]);

  useEffect(() => {
    const result = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/transaction/ticket?eventId=${urlParams.id}`
        );
        console.log(response.data);
        setTicket(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    result();
  }, [urlParams.id]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      listTicket.forEach((ticket, index) => {
        total += (ticketCounts[index] || 0) * ticket.price;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [listTicket, ticketCounts]);

  useEffect(() => {
    setSelectedItems(ticketCounts);
  }, [ticketCounts]);

  const handleOrderNow = () => {
    console.log("Order Now clicked!");

    const selectedItemsArray = Object.keys(selectedItems).map((index) => ({
      ticketType: listTicket[index].ticketType,
      ticketCount: selectedItems[index],

      subtotal: (selectedItems[index] || 0) * listTicket[index].price,
    }));

    const totalPrice = selectedItemsArray.reduce(
      (total, item) => total + item.subtotal,
      0
    );

    const totalItems = Object.keys(selectedItems).map((index) => ({
      ticketid: listTicket[index].id,
      quantity: selectedItems[index],
    }));

    if (selectedItemsArray.length > 0) {
      dispatch(setCart({ items: selectedItemsArray, totalPrice, totalItems }));
      navigate(`/checkout/${urlParams.id}`);
    }

    console.log("Selected Items:", selectedItemsArray);
  };

  return (
    <div className="p-4 w-[400px] mx-auto rounded-xl shadow-md my-[80px]">
      <div>
        <h1 className="font-bold text-[24px] text-[#294A62] my-2">
          Buy Ticket
        </h1>
      </div>
      <div className="w-full h-[2px] bg-slate-300 mb-2"></div>
      <div className="mt-4">
        <h2 className="text-[16px] font-bold my-2">{isEvent}</h2>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <h1 className="text-slate-500 font-bold">{isLocation}</h1>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-300 mb-2"></div>
      <div className="mt-8">
        <h1 className="font-bold">Choose Ticket</h1>
        <div className="w-full h-[2px] bg-slate-300 mb-2"></div>
        <div>
          {/* Loop through listTicket */}
          {listTicket.map((ticket, index) => (
            <div key={index} className="flex justify-between items-center my-3">
              <div>
                <label className="w-full text-gray-700 text-sm font-semibold">
                  {`${isEvent} - ${ticket.ticketType}`}
                </label>
                <h1>{`Rp. ${ticket.price}`}</h1>
              </div>
              <div className="flex justify-end w-6/12">
                <div>
                  <div className="flex ">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-8 w-8 rounded cursor-pointer outline-none flex items-center justify-center"
                    >
                      <span className="text-sm font-medium">−</span>
                    </button>
                    <input
                      type="number"
                      className="focus:outline-none text-center w-12 bg-gray-100 font-semibold text-md cursor-default mx-2"
                      name={`custom-input-number-${index}`}
                      value={ticketCounts[index] || 0}
                      onChange={(e) =>
                        handleInputChange(index, parseInt(e.target.value) || 0)
                      }
                    />
                    <button
                      onClick={() => handleIncrement(index)}
                      className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-8 w-8 rounded cursor-pointer outline-none flex items-center justify-center"
                    >
                      <span className="text-sm font-medium">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <div className="flex justify-between mt-2">
            <h1 className="font-bold text-[#294A62]">Total Harga :</h1>
            <h1 className="font-bold text-[#294A62]">Rp. {totalPrice}</h1>
          </div>
          <div className="mt-4">
            <ButtonRegister title="Order Now !" onClick={handleOrderNow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
