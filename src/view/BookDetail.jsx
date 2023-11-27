import LargerNavbar from "../components/User-Navbar-Lg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const [isInvoice, setInInvoice] = useState("");
  const [isFee, setInFee] = useState("");
  const [isPayment, setInPayment] = useState("");
  const [isPaid, setInStatus] = useState(false);
  const [isTotalPay, setInTotalPay] = useState("");
  const [isBookDate, setInBookDate] = useState("");
  const [isEventStart, setInEventStart] = useState("");
  const [isName, setInName] = useState("");
  const [isEmail, setInEmail] = useState("");
  const [isProvince, setInProvince] = useState("");
  const [isCity, setInCity] = useState("");
  const [isAddres, setInAddres] = useState("");
  const [isCountry, setInCountry] = useState("");
  const [isPhone, setInPhone] = useState("");
  const [isEventId, setInEventId] = useState("");
  const [isEvent, setInEvent] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("login");
  const urlParams = useParams();
  console.log(urlParams.id);

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleDateString("en-US", options);
  };

  const onHandlePay = () => {
    console.log("masuk");
    console.log(`/pay/${urlParams.id}`);
    navigate(`/pay/${urlParams.id}`);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:4500/transaction/detail?id=${urlParams.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.bookingdate);
      const data = response.data.data;
      setInInvoice(data.invoice);
      setInFee(data.fee);
      setInPayment(data.payment);
      setInStatus(data.ispaid);
      setInTotalPay(data.subtotal);
      setInBookDate(formatDateTime(data.bookingdate));
      setInName(data.buyer.name);
      setInEmail(data.buyer.email);
      setInProvince(data.buyer.province);
      setInCity(data.buyer.city);
      setInAddres(data.buyer.address);
      setInCountry(data.buyer.country);
      setInPhone(data.buyer.phone);
      setInEventId(data.eventid);
    };
    getData();
  }, []);

  useEffect(() => {
    const EventNames = async (eventId) => {
      try {
        const response = await axios.get(
          `http://localhost:4500/transaction/whatevents/${isEventId}`
        );

        setInEvent(response.data.name);
        setInEventStart(formatDateTime(response.data.startdate));
      } catch (error) {
        console.error(error);
      }
    };
    EventNames();
  });

  return (
    <div className="flex mx-auto w-[50vw] justify-center">
      <div className="hidden md:block my-12 rounded-xl mx-2 shadow-xl w-[270px] bg-[#0A2B55] h-[250px]">
        <LargerNavbar></LargerNavbar>
      </div>
      <div className="my-12 w-full">
        <Link
          to="/ticket-bookings"
          className="flex w-full items-center mt-1 text-slate-500 cursor-pointer hover:ml-1 hover:text-slate-600"
        >
          <IoMdArrowRoundBack />
          <h1>Back</h1>
        </Link>
        <div className="w-full my-2 shadow-2xl rounded-xl p-3 max-w-md">
          <div className="flex justify-between">
            <h1 className="text-[#002744] text-xl font-bold">Order Detail</h1>
          </div>
          <div>
            <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
          </div>
          <div>
            <h1 className="text-[#002744] text-xl font-bold">
              Pemasanan #{isInvoice}
            </h1>
            <p className="font-bold text-[12px] text-slate-500 my-2">
              Booking Date: {isBookDate}
            </p>
            <p className="font-bold text-[12px] text-slate-500 mb-2">
              Event Start Date: {isEventStart}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[#002744] text-[16px] font-bold">
                Billing Details
              </h1>
              <div className="text-slate-500 font-bold text-[12px]">
                <h2 className="my-1">Name: {isName}</h2>
                <h2 className="my-1">Email: {isEmail}</h2>
                <h2 className="my-1">Phone Number: {isPhone}</h2>
                <h2 className="my-1">Country: {isCountry}</h2>
                <h2 className="my-1">Province: {isProvince}</h2>
                <h2 className="my-1">City: {isCity}</h2>
                <h2 className="my-1">Address: {isAddres}</h2>
              </div>
            </div>
            <div>
              <h1 className="text-[#002744] text-[16px] font-bold">
                Informasi Pembayaran
              </h1>
              <div className="text-slate-500 font-bold text-[12px]">
                <h2 className="my-1">Event: {isEvent}</h2>
                <h2 className="my-1">Pajak: Rp. {isFee}</h2>
                <h2 className="my-1">Total Pay: Rp. {isTotalPay}</h2>
                <h2 className="my-1">Payment Metode: {isPayment}</h2>
                <h2 className="my-1">
                  Status Payment:{" "}
                  <span className={isPaid ? "text-green-500" : "text-red-500"}>
                    {isPaid === true ? "Paid" : "Unpaid"}
                  </span>
                </h2>
                <button
                  onClick={onHandlePay}
                  className={`bg-[#0A2B55] my-4 text-white py-2 px-4 rounded-md font-bold text-xs cursor-pointer ${
                    isPaid ? "pointer" : "not-allowed"
                  }`}
                  disabled={isPaid}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
          <div className="mb-2">
            <h1 className="text-[#002744] text-[16px] font-bold">
              Booked Ticket
            </h1>
            <div className="text-slate-500 font-bold text-[12px]">
              <h2 className="my-1">1. Makan Bareng (VIP) </h2>
              <h2 className="my-1">2, Makan Bareng (Regular) </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
