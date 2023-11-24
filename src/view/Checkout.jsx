import MiniForm from "../components/Form-Mini";
import ButtonRegister from "../components/Button-Register";
import Event from "../assets/EVENT2.jpg";
import { FaCalendarDay, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const CheckOut = () => {
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
          <MiniForm label="first name" />
          <MiniForm label="last name" position="end" />
        </div>
        <div className="flex pt-4">
          <MiniForm label="no telepon" />
          <MiniForm label="negara" position="end" />
        </div>
        <div className="flex pt-4">
          <MiniForm label="provinsi" />
          <MiniForm label="kota" position="end" />
        </div>
        <div className="flex pt-4">
          <MiniForm label="email" />
          <MiniForm label="kode pos" position="end" />
        </div>
        <div className="pt-2">
          <p className="text-rose-500">
            *E-ticket akan di kirimkan ke email anda!
          </p>
        </div>
        <div class="relative rounded-md shadow-sm pt-2">
          <textarea
            class="form-input py-2 px-3 block w-full leading-5 rounded-md border border-gray-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            rows="4"
            placeholder="Address"
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
            <h1 className="text-[12px]">DELIWAFA VOL 3</h1>
            <div className="flex w-full">
              <div class="flex items-center justify-center mr-2">
                <FaCalendarDay class="mr-1" />
                <h1 className="text-slate-500">SUN, 17 DEC 2023</h1>
              </div>
              <div class="flex items-center justify-center">
                <FaClock class="mr-1" />
                <h1 className="text-slate-500">09.00 WIB</h1>
              </div>
            </div>
            <div class="flex items-center ">
              <FaMapMarkerAlt class="mr-1" />
              <h1 className="text-slate-500">Mojokerto, Indonesia</h1>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h4 className="font-bold text-2xl">Order Detail</h4>
        </div>
        <h1 className="font-bold">Info Tiket</h1>
        <div className="flex justify-between text-slate-500 font-bold text-xs">
          <h1>TIPE TIKET 1</h1>
          <h1>1x</h1>
        </div>
        <div>
          <div className="w-full h-[1px] my-2 bg-slate-300 mx-auto"></div>
        </div>
        <div className="flex justify-between font-medium">
          <h1>Total Tiket</h1>
          <h1>1</h1>
        </div>
        <div className="flex justify-between text-slate-500 font-bold text-[12px]">
          <h1>HARGA TIKET</h1>
          <h1>Rp.355.000</h1>
        </div>
        <div className="flex justify-between text-[12px]">
          <h1 className="flex justify-between text-slate-500 font-bold ">
            Admin Fee
          </h1>
          <h1 className="text-rose-500">+Rp.2.500</h1>
        </div>
        <div>
          <div className="w-full h-[1px] my-2 bg-slate-300 mx-auto"></div>
        </div>
        <div className="flex justify-between text-slate-500 font-bold text-[14px]">
          <h1>SUBTOTAL</h1>
          <h1>Rp.355.000</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl my-2">Voucher</h1>
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
        </div>
        <div className="mt-4">
          <ButtonRegister title="process to payment" />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
