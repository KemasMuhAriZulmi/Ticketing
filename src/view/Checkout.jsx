import MiniForm from "../components/Form-Mini";
import ButtonRegister from "../components/Button-Register";
import Event from "../assets/EVENT2.jpg";
import { FaCalendarDay, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Toast from "../components/Alert";

const CheckOut = () => {
  const token = localStorage.getItem("login");
  const [isFname, setIsFname] = useState("");
  const [isLname, setIsLname] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isCountry, setIsCountry] = useState("");
  const [isProvince, setIsProvince] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPosCode, setIsPosCode] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isSubTotal, setIsSubTotal] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("BCA");
  const [toast, setToast] = useState(null);
  const [isFee, setIsFee] = useState(1500);
  const [isVoucher, setIsVoucher] = useState("");
  const [eventData, setEventData] = useState([]);
  const [isTotalItem, setIsTotalItem] = useState([]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const urlParams = useParams();
  console.log(eventData);

  const data = useSelector((state) => {
    return state.cartSlice.cart;
  });

  console.log(data.totalItems);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const onProcessPayment = async () => {
    try {
      if (
        !selectedPaymentMethod ||
        !isFname ||
        !isLname ||
        !isPhone ||
        !isCountry ||
        isProvince ||
        isCity ||
        isEmail ||
        isPosCode ||
        isAddress
      ) {
        return showToast(
          "error",
          response.data.message || "Failed to update profile."
        );
      }
      if (!isVoucher) {
        console.log("MASUK");
        const response = await axios.post(
          "http://localhost:4500/transaction/create",
          {
            totalItems: data.totalItems.map((item) => ({
              ticketid: item.ticketid,
              quantity: item.quantity,
            })),
            userid: 6,
            payment: selectedPaymentMethod,
            eventid: urlParams.id,
            name: isFname + isLname,
            phone: isPhone,
            country: isCountry,
            province: isProvince,
            city: isCity,
            email: isEmail,
            poscode: isPosCode,
            address: isAddress,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success === true) {
          showToast(
            "success",
            response.data.message || "Transaction created successfully"
          );
        }
      }
      if (isVoucher) {
        const response = await axios.post(
          "http://localhost:4500/transaction/create",
          {
            totalItems: data.totalItems.map((item) => ({
              ticketid: item.ticketid,
              quantity: item.ticketCount,
            })),
            userid: 6,
            payment: selectedPaymentMethod,
            eventid: urlParams.id,
            name: isFname + isLname,
            phone: isPhone,
            country: isCountry,
            province: isProvince,
            city: isCity,
            email: isEmail,
            poscode: isPosCode,
            address: isAddress,
            promocode: isVoucher,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        if (response.data.success === true) {
          showToast(
            "success",
            response.data.message || "Transaction completed successfully"
          );
        }
      }
    } catch (error) {
      console.log(error);
      showToast("error", response.data.message || "Failed to update profile.");
    }
  };

  useEffect(() => {
    const EventNames = async (eventId) => {
      try {
        const response = await axios.get(
          `http://localhost:4500/transaction/whatevents/${urlParams.id}`,
          {}
        );
        setEventData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    EventNames();
  }, []);

  return (
    <div className="w-[60vw] mx-auto flex my-4">
      <div className="p-4 w-[1200px]">
        <div className="pt-4">
          <h4 className="font-bold text-2xl">Order Detail</h4>
        </div>
        <div>
          <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
        </div>
        <div className="flex pt-4">
          <MiniForm
            label="first name"
            onChange={(e) => setIsFname(e.target.value)}
          />
          <MiniForm
            label="last name"
            position="end"
            onChange={(e) => setIsLname(e.target.value)}
          />
        </div>
        <div className="flex pt-4">
          <MiniForm
            label="no telepon"
            onChange={(e) => setIsPhone(e.target.value)}
          />
          <MiniForm
            label="negara"
            position="end"
            onChange={(e) => setIsCountry(e.target.value)}
          />
        </div>
        <div className="flex pt-4">
          <MiniForm
            label="provinsi"
            onChange={(e) => setIsProvince(e.target.value)}
          />
          <MiniForm
            label="kota"
            position="end"
            onChange={(e) => setIsCity(e.target.value)}
          />
        </div>
        <div className="flex pt-4">
          <MiniForm
            label="email"
            onChange={(e) => setIsEmail(e.target.value)}
          />
          <MiniForm
            label="kode pos"
            position="end"
            onChange={(e) => setIsPosCode(e.target.value)}
          />
        </div>
        <div className="pt-2">
          <p className="text-rose-500">
            *E-ticket akan di kirimkan ke email anda!
          </p>
        </div>
        <div className="relative rounded-md shadow-sm pt-2">
          <textarea
            className="form-input py-2 px-3 block w-full leading-5 rounded-md border border-gray-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            rows="4"
            placeholder="Address"
            onChange={(e) => setIsAddress(e.target.value)}
          ></textarea>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 w-[600px] ">
        <div className="flex pt-4 font-bold text-sky-700">
          <img src={Event} alt="" className="w-[80px] rounded" />
          <div className="ml-4 w-full text-[10px]">
            <h1 className="text-[12px]">{eventData.name}</h1>
            <div className="flex w-full">
              <div className="flex items-center justify-center mr-2">
                <FaCalendarDay className="mr-1" />
                <h1 className="text-slate-500">
                  {formatDate(eventData.startdate)}
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <FaClock className="mr-1" />
                <h1 className="text-slate-500">
                  {formatTime(eventData.startdate)}
                </h1>
              </div>
            </div>
            <div className="flex items-center ">
              <FaMapMarkerAlt className="mr-1" />
              <h1 className="text-slate-500">{eventData.location}</h1>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="font-bold text-2xl">Order Detail</h4>
        </div>
        <div className="pt-4">
          <h4 className="font-bold text-2xl">Info Tiket</h4>
          {data.items.map((ticket, index) => (
            <div
              key={index}
              className="flex justify-between text-slate-500 font-bold text-xs"
            >
              <h1>
                {eventData.name}-{ticket.ticketType}
              </h1>
              <h1>
                {eventData.name}-{`${ticket.ticketCount}x`}
              </h1>
            </div>
          ))}
        </div>

        <div>
          <div className="w-full h-[1px] my-2 bg-slate-300 mx-auto"></div>
        </div>
        <div className="flex justify-between font-medium">
          <h1>Total Tiket</h1>
          <h1>
            {data.items.reduce(
              (total, ticket) => total + ticket.ticketCount,
              0
            )}
          </h1>
        </div>

        <div className="flex justify-between text-slate-500 font-bold text-[12px]">
          <h1>HARGA TIKET</h1>
          <h1>Rp. {data.totalPrice}</h1>
        </div>
        <div className="flex justify-between text-[12px]">
          <h1 className="flex justify-between text-slate-500 font-bold ">
            Admin Fee
          </h1>
          <h1 className="text-rose-500">+Rp.{isFee}</h1>
        </div>
        <div>
          <div className="w-full h-[1px] my-2 bg-slate-300 mx-auto"></div>
        </div>
        <div className="flex justify-between text-slate-500 font-bold text-[14px]">
          <h1>SUBTOTAL</h1>
          <h1>
            Rp.
            {data.totalPrice + isFee}
          </h1>
        </div>

        <div>
          <h1
            className="font-bold text-xl my-2"
            onChange={(e) => setIsVoucher(e.target.value)}
          >
            Voucher
          </h1>
          <div className="flex focus-within:border-blue-500 p-0">
            <input type="text" className="w-full border border-gray-300" />
            <button
              className="bg-blue-500 text-xs p-1 w-[60px] text-center  text-white  focus:outline-none hover:bg-blue-600 active:bg-blue-800"
              type="button"
            >
              Apply
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">Payment Metode</h1>
          <div>
            <select
              className="form-select block w-full pl-3 pr-10 py-2 text-base leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            >
              <option value="BCA">BCA</option>
              <option value="BRI">BRI</option>
              <option value="BNI">BNI</option>
              <option value="BRI">BRI</option>
              <option value="BANK JATIM">Bank JATIM</option>
              <option value="QRIS">QRIS</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <ButtonRegister
            title="process to payment"
            onClick={onProcessPayment}
          />
        </div>
      </div>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default CheckOut;
