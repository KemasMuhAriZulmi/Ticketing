import UserInformation from "../view/UserInformation";
import Navbar from "../components/Navbar";
import UserNavbar from "../components/User-Navbar";
import { useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom";

const UserInformationPage = () => {
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
      <UserInformation />
      <UserNavbar />
    </div>
  );
};

export default UserInformationPage;
