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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Pages/Home";
import EventDetail from "./Pages/EventDetail";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
// import AllEventsPage from './pages/AllEventsPage';
// TEMPORAY //
import EventChoose from "./components/Mvp2Test/eventchoose";
import EventCheckout from "./components/Mvp2Test/eventdetail";
import UnauthorizedPage from "./view/401";

//Gibran Import End

const App = () => {
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
    <ErrorBoundary>
      {/* <Router> */}
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="fade">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventDetail />} />
            {/* <Route path="/events" component={AllEventsPage} />  */}
            <Route path="/events/:id/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login-user" element={<LoginUserPage />} />
            <Route path="/login-promotor" element={<LoginPromotorPage />} />
            <Route path="/register-user" element={<RegisterUserPage />} />
            <Route
              path="/register-promotor"
              element={<RegisterPromotorPage />}
            />
            <Route path="/user-information" element={<UserInformationPage />} />
            <Route path="/ticket-bookings" element={<UserBookingsPage />} />
            <Route path="/change-password" element={<ChangePassPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/refferal" element={<RefferalPages />} />
            <Route path="/input-pass" element={<InputPassPage />} />
            <Route path="/checkout/:id" element={<CheckOutPage />} />
            <Route path="/pay/:id" element={<PayPage />} />
            <Route
              path="/ticket-bookings/detail/:id"
              element={<BookingDetailPage />}
            />
            <Route path="/forgotpass" element={<ResetPassPage />} />
            <Route path="/401" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />

            {/* TEMPORARY ROUTING */}
            <Route path="/event-choose" element={<EventChoose />} />
            <Route path="/event-detail/:id" element={<EventCheckout />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
      {/* </Router> */}
    </ErrorBoundary>
  );
};

export default App;
