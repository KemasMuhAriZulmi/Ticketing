import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pay = () => {
  const [isPayment, setInPayment] = useState("");
  const [isTotalPay, setInTotalPay] = useState("");
  const [isName, setInName] = useState("");
  const [isEmail, setInEmail] = useState("");
  const [isPhone, setInPhone] = useState("");
  const [isEventId, setInEventId] = useState("");
  const [isEvent, setInEvent] = useState("");
  const [isPaymentSuccess, setPaymentSuccess] = useState(false); // Added state for success dialog

  const token = localStorage.getItem("login");
  const urlParams = useParams();

  const onHandleClick = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:4500/transaction/checkout/${urlParams.id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.message);
      setPaymentSuccess(true);
    } catch (error) {
      console.error("Error confirming payment:", error);
    }
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
      console.log(response);
      const data = response.data.data;
      setInEventId(data.eventid);
      setInName(data.buyer.name);
      setInEmail(data.buyer.email);
      setInPhone(data.buyer.phone);
      setInTotalPay(data.subtotal);
      setInPayment(data.payment);
    };

    getData();
  }, [token, urlParams.id]);

  useEffect(() => {
    const EventNames = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4500/transaction/whatevents/${isEventId}`
        );
        console.log(response);
        setInEvent(response.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    EventNames();
  }, [isEventId]);

  useEffect(() => {
    return () => {
      setPaymentSuccess(false);
    };
  }, []);

  return (
    <div className="w-10/12 mx-auto my-12 shadow-2xl rounded-xl p-3 max-w-md">
      <h1 className="text-[#294A62] font-bold text-center">
        Segera selesaikan pembayaran anda!
      </h1>
      <p className="text-slate-400 text-center">Terima Kasih</p>
      <h1 className="text-[#294A62] font-bold text-center text-[12px]">
        Detail Transaction:
      </h1>
      <div className="pl-8 pr-8 my-4 text-[14px]">
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Name</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">{isName}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Email</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">{isEmail}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">No. Handphone</div>
          <div className="w-2/6 text-center">:</div>
          <div className="w-full">{isPhone}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Event</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">{isEvent}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Total Dibayar</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">{isTotalPay}</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Payment Method</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">{isPayment}</div>
        </div>
      </div>
      <h1 className="text-center text-[#163954] font-bold text-sm">
        Confirm Payment:
      </h1>
      <div className="w-4/6 mx-auto mt-4 pb-4">
        <button
          className="w-full bg-[#163954] text-white py-2 rounded-md transition duration-300 hover:bg-[#122b3b] focus:outline-none focus:ring focus:border-[#122b3b] active:bg-[#0d1e2b]"
          onClick={onHandleClick}
        >
          Confirm Payment
        </button>
      </div>
      {isPaymentSuccess && (
        <div className="bg-green-200 p-3 rounded-md my-4 text-center">
          Payment Confirmed! Thank you for your purchase.
        </div>
      )}
    </div>
  );
};

export default Pay;
