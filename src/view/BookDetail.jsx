import LargerNavbar from "../components/User-Navbar-Lg";
import { IoMdArrowRoundBack } from "react-icons/io";
const BookDetail = () => {
  return (
    <div className="flex mx-auto w-[50vw] justify-center">
      <div className="hidden md:block my-12 rounded-xl mx-2 shadow-xl w-[270px] bg-[#0A2B55] h-[250px]">
        <LargerNavbar></LargerNavbar>
      </div>
      <div className="my-12 w-full">
        <div className="flex w-full items-center mt-1 text-slate-500 cursor-pointer hover:ml-1 hover:text-slate-600">
          <IoMdArrowRoundBack />
          <h1>Back</h1>
        </div>
        <div className="w-full my-2 shadow-2xl rounded-xl p-3 max-w-md">
          <div className="flex justify-between">
            <h1 className="text-[#002744] text-xl font-bold">Order Detail</h1>
          </div>
          <div>
            <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
          </div>
          <div>
            <h1 className="text-[#002744] text-xl font-bold">
              Pemasanan # T23516
            </h1>
            <p className="font-bold text-[12px] text-slate-500 my-2">
              Booking Date: Tue, Nov 21, 2023 03:14pm
            </p>
            <p className="font-bold text-[12px] text-slate-500 mb-2">
              Event Start Date: Sun, Jan 07, 2023 06:00am
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[#002744] text-[16px] font-bold">
                Billing Details
              </h1>
              <div className="text-slate-500 font-bold text-[12px]">
                <h2 className="my-1">Name: John Olsen</h2>
                <h2 className="my-1">Email: gibrand987@gmail.com</h2>
                <h2 className="my-1">Phone Number: 08xx59xx60xx</h2>
                <h2 className="my-1">Country: Indonesia</h2>
                <h2 className="my-1">Province: Jawa Timur</h2>
                <h2 className="my-1">City: Kediri</h2>
                <h2 className="my-1">Address: JL. Pemuda</h2>
              </div>
            </div>
            <div>
              <h1 className="text-[#002744] text-[16px] font-bold">
                Informasi Pembayaran
              </h1>
              <div className="text-slate-500 font-bold text-[12px]">
                <h2 className="my-1">Event: Makan Bareng Artis Ternama</h2>
                <h2 className="my-1">Pajak: Rp. 4550</h2>
                <h2 className="my-1">Total Pay: Rp. 134500</h2>
                <h2 className="my-1">Payment Metode: QRIS</h2>
                <h2 className="my-1">
                  Status Payment: <span className="text-rose-500">Unpaid</span>
                </h2>
                <button className="bg-[#0A2B55] my-4 text-white py-2 px-4 rounded-md font-bold text-xs cursor-pointer">
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
