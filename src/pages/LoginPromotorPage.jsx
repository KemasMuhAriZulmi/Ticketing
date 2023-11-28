import Navbar from "../components/Header";
import LoginPromotor from "../view/LoginPromotor";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPromotorPage = () => {
  return (
    <div>
      <Navbar />
      <LoginPromotor />
      <Footer></Footer>
    </div>
  );
};

export default LoginPromotorPage;
