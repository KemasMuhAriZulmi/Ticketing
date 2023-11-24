import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

// Gibran Import Start

import RegisterPromotorPage from "./pages/RegisterPromotorPage";
import LoginUserPage from "./pages/LoginUserPage";
import LoginPromotorPage from "./pages/LoginPromotorPage";
import RegisterUserPage from "./pages/RegsiterUserPage";
import UserInformationPage from "./pages/UserInformationPage";
import UserBookingsPage from "./pages/UserBookingsPage";
import NotFoundPage from "./view/404";
import ChangePassPage from "./pages/ChangePassPage";
import EditProfilePage from "./pages/EditProfilePage";
import { useEffect } from "react";
import RefferalPages from "./pages/Refferal";
import InputPassPage from "./pages/InputPassPage";
import CheckOutPage from "./pages/CheckoutPage";
import PayPage from "./pages/Pay";
import BookingDetailPage from "./pages/BookingsDetail";
import ResetPassPage from "./pages/ResetPassPage";

//Gibran Import End

function App() {
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
          console.log(response.data.succes);
          if (response.data.succes !== true) {
            localStorage.removeItem("login");
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
        result();
      };
    }
    if (!token) {
    }
  }, []);
  return (
    <>
      {/* Gibran start */}
      <Routes>
        <Route path="/login-user" element={<LoginUserPage />} />
        <Route path="/login-promotor" element={<LoginPromotorPage />} />
        <Route path="/register-user" element={<RegisterUserPage />} />
        <Route path="/register-promotor" element={<RegisterPromotorPage />} />
        <Route path="/user-information" element={<UserInformationPage />} />
        <Route path="/ticket-bookings" element={<UserBookingsPage />} />
        <Route path="/change-password" element={<ChangePassPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/refferal" element={<RefferalPages />} />
        <Route path="/input-pass" element={<InputPassPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route
          path="/ticket-bookings/detail/:id"
          element={<BookingDetailPage />}
        />
        <Route path="/forgotpass" element={<ResetPassPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Gibran End */}
    </>
  );
}

export default App;
