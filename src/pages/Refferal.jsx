import Refferal from "../view/Refferal.jsx";
import Navbar from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
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

  useEffect(() => {
    const token = localStorage.getItem("login");
    const result = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/user/checkrole",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data !== "user") {
          navigate("/401");
        }
      } catch (error) {
        navigate("/401");
      }
    };
    result();
  });
  return (
    <div>
      <Navbar />
      <Refferal />
      <Footer></Footer>
    </div>
  );
};

export default RefferalPages;
