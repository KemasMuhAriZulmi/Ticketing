// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetail from "./pages/EventDetail";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        )}
      </Router>
    </Provider>
  );
};

export default App;
