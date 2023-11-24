import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import CategoryMenu from "../components/CategoryMenu";
import EventList from "../components/EventList";
import Footer from "../components/Footer"; 
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <SearchForm/>
        <Banner />
        <CategoryMenu />
        <EventList />
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
