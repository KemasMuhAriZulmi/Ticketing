import Refferal from "../view/Refferal.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const RefferalPages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("login");
    if (token) {
      const result = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4500/user/keplogin",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.success === false) {
            localStorage.removeItem("login");
            navigate("/login-user");
          }
        } catch (error) {
          console.log("Login failed:", error);
          localStorage.removeItem("login");
          navigate("/login-user");
        }
      };
      result();
    } else {
      console.log("MASUK");
      navigate("/login-user");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Refferal />
      <Footer></Footer>
    </div>
  );
};

export default RefferalPages;
