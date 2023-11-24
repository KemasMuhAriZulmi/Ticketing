import { MdAccountCircle } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { PiCoinsFill } from "react-icons/pi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const LargerNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login-user");
  };
  return (
    <div className="hidden md:block w-11/12 m-3 mx-auto rounded-xl mt-6 ">
      <div className="">
        <Link
          to="/user-information"
          className="cursor-pointer  my-4 text-zinc-50 text-sm flex rounded-xl hover:pl-1 hover:bg-slate-500 hover:text-white"
        >
          <MdAccountCircle size={20} className="mx-4" />
          <h1 className="">My Account</h1>
        </Link>
        <Link
          to="/ticket-bookings"
          className="cursor-pointer  my-4 text-zinc-50 text-sm flex rounded-xl hover:pl-1 hover:bg-slate-500 hover:text-white"
        >
          <BsFillTicketPerforatedFill size={20} className="mx-4" />
          <h1>My Bookings</h1>
        </Link>
        <Link
          to="/refferal"
          className="cursor-pointer my-4 text-zinc-50 text-sm flex rounded-xl hover:pl-1 hover:bg-slate-500 hover:text-white"
        >
          <PiCoinsFill size={20} className="mx-4" />
          <h1>Refferal</h1>
        </Link>
        <Link
          to="/input-pass"
          className="cursor-pointer my-4 text-zinc-50 text-sm flex rounded-xl hover:pl-1 hover:bg-slate-500 hover:text-white"
        >
          <MdPassword size={20} className="mx-4" />
          <h1 className="">Change Password</h1>
        </Link>
        <div
          className="cursor-pointer my-4 text-slate-400 font-bold text-xs p-2 pr-3 hover:text-white"
          onClick={handleLogout}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default LargerNavbar;
