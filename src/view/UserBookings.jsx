import Banner from "../assets/booking.jpg";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserBookings = () => {
  useEffect(() => {
    const token = localStorage.getItem("login");
    const result = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/transaction/mybooks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        showToast("error", "Email or Password invalid");
      }
    };

    result();
  }, []);

  return (
    <div>
      <div
        className="w-screen h-48 bg-gradient-to-r bg-cover bg-center from-cyan-500 to-blue-500 flex items-center"
        style={{ backgroundImage: `url("${Banner}")` }}
      >
        <div className="mx-auto">
          <div className="flex justify-center ">
            <h1 className="text-4xl text-white font-black">My Bookings</h1>
          </div>
          <div className="flex justify-center">
            <Link
              to="/user-information"
              className="text-white font-black hover:text-sky-500"
            >
              Dashboard
            </Link>
            <p className="mx-2 text-white font-black">/</p>
            <p className="text-white font-black">My Bookings</p>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="w-full md:w-2/3  p-5 mx-auto bg-white">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
              </svg>
            </div>

            <input
              type="text"
              placeholder="Cari Yang Mana"
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>

            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
              Reset Filter
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">All Type</option>
                <option value="upcoming">Upcoming</option>
                <option value="distant">Distant</option>
              </select>

              <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                <option value="">Any Price</option>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* CARD TICKET */}
      <div className="w-10/12 shadow p-5 rounded-lg bg-white mx-auto max-w-md">
        <h1 className="text-normal font-medium py-1">My Bookings</h1>
        <div>
          <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserBookings;
