import { MdAccountCircle } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { PiCoinsFill } from "react-icons/pi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const MyAccount = () => {
    navigate("/user-information");
  };
  const MyBookings = () => {
    navigate("/ticket-bookings");
  };
  return (
    <div className="z-50">
      <div className="w-full z-50 h-[55px] border-t-2 border-slate-200 fixed bottom-0 md:hidden">
        <div className="flex justify-around">
          {/* NOTE : BUTUH SLICHING */}
          <div className="cursor-pointer rounded-xl" onClick={MyAccount}>
            <MdAccountCircle size={28} className="mx-auto" />
            <h1 className="text-[12px] font-medium py-1">My Account</h1>
          </div>
          <div className="cursor-pointer" onClick={MyBookings}>
            <BsFillTicketPerforatedFill size={28} className="mx-auto" />
            <h1 className="text-[12px] font-medium py-1">My Bookings</h1>
          </div>
          <div className="cursor-pointer">
            <PiCoinsFill size={28} className="mx-auto" />
            <h1 className="text-[12px] font-medium py-1">Refferal</h1>
          </div>
          <div className="cursor-pointer">
            <MdPassword size={28} className="mx-auto" />
            <h1 className="text-[12px] font-medium py-1">Change Password</h1>
          </div>
          {/* NOTE : BUTUH SLICHING */}
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
