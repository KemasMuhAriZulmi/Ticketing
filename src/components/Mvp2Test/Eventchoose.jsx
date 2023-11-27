import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventChoose = () => {
  const navigate = useNavigate();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/transaction/getevents"
        );
        setEventList(response.data);
      } catch (error) {
        console.error("Error get events:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="bg-neutral-200 h-screen flex flex-col items-center justify-center">
      <div className="max-w-screen-md w-full">
        <h1 className="text-3xl font-bold mb-4">Choose The Event</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {eventList.map((event) => (
            <div
              key={event.id}
              className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {event.name}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {event.description}
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-md focus:bg-blue-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-md dark:shadow-md dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md"
                  onClick={() => navigate("/event-detail/" + event.id)}
                >
                  Go Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventChoose;
