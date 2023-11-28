import React, { useState, useEffect } from "react";
import axios from "../axios";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const handleEventDeleted = async (eventId) => {
    try {
      // Send a DELETE request to remove the event
      await axios.delete(`http://localhost:4500/events/${eventId}`);


      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== eventId)
      );
    } catch (error) {
      console.error(error);
      setError("An error occurred while deleting the event.");
    }
  };

  const handleEventUpdated = async (updatedEvent) => {
    try {
      // Send a PUT request to update the event
      await axios.put(`http://localhost:4500/events/${updatedEvent.id}`, updatedEvent);

      // Update the list of events after editing
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating the event.");
    }
  };

  useEffect(() => {
    // Fetch dashboard data with the selected filter
    axios
      .get(`/dashboard?filter=${filter}`)
      .then((response) => {
        setTotalEvents(response.data.totalEvents);
        setTotalTicketsSold(response.data.totalTicketsSold);

        // Prepare data for the bar chart
        const data = {
          labels: response.data.eventNames,
          datasets: [
            {
              label: "Tickets Sold",
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(75,192,192,0.6)",
              hoverBorderColor: "rgba(75,192,192,1)",
              data: response.data.ticketsSoldPerEvent,
            },
          ],
        };

        setChartData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [filter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const chartContainer = document.querySelector(".chart-container");
      if (chartContainer) {
        chartContainer.classList.add("chart-visible");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Total Events</h2>
          <p className="text-4xl">{totalEvents}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Total Tickets Sold</h2>
          <p className="text-4xl">{totalTicketsSold}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Tickets Sold per Event</h2>
        <div className="flex items-center space-x-4 mb-4">
          <span>Filter by:</span>
          <button
            onClick={() => handleFilterChange("all")}
            className={`filter-button ${filter === "all" && "active"}`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("week")}
            className={`filter-button ${filter === "week" && "active"}`}
          >
            Week
          </button>
          <button
            onClick={() => handleFilterChange("month")}
            className={`filter-button ${filter === "month" && "active"}`}
          >
            Month
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Events</h2>
            <ul>
              {events.map((event) => (
                <li key={event.id} className="mb-2">
                  <strong>{event.name}</strong> - {event.date}
                  <button
                    onClick={() => handleEventDeleted(event.id)}
                    className="delete-button ml-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      const updatedName = prompt(
                        "Enter the updated name:",
                        event.name
                      );
                      if (updatedName) {
                        handleEventUpdated({ ...event, name: updatedName });
                      }
                    }}
                    className="edit-button ml-2"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
