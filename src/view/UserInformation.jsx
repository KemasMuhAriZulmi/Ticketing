import { BiSolidPencil } from "react-icons/bi";
import UserNavbar from "../components/User-Navbar";
import LargerNavbar from "../components/User-Navbar-Lg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInformation = () => {
  const [isUsername, setInUsername] = useState("");
  const [isEmail, setInEmail] = useState("");
  const [isName, setInName] = useState("");
  const [isPoints, setInPoints] = useState("");
  const navigate = useNavigate();

  const onEditClick = () => {
    navigate("/edit-profile");
  };

  useEffect(() => {
    const result = async () => {
      try {
        const secondToken = localStorage.getItem("login");
        const secondResponse = await axios.get(
          "http://localhost:4500/user/detail",
          {
            headers: {
              Authorization: `Bearer ${secondToken}`,
            },
          }
        );
        const userDetails = secondResponse.data.data;
        setInUsername(userDetails.username);
        setInEmail(userDetails.email);
        setInName(userDetails.name);
        setInPoints(userDetails.points);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div className="flex w-full mx-auto">
      <div className="flex mx-auto">
        <div className="hidden md:block my-12 rounded-xl mx-2 shadow-xl w-[250px] bg-[#0A2B55]">
          <LargerNavbar />
        </div>
        <div className="w-10/12 my-12 shadow-2xl mx-2 rounded-xl p-3 px-6 max-w-md">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Account Information</h1>
            <div
              className="flex items-center cursor-pointer"
              onClick={onEditClick}
            >
              <BiSolidPencil size={"16px"} className="text-slate-400" />
              <p className="text-xs font-medium text-slate-400">Edit Profile</p>
            </div>
          </div>
          <div>
            <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
          </div>
          <h1 className="font-bold pb-2 text-2xl">User</h1>
          <div className="flex justify-between mr-4">
            <h2 className="text-sm font-bold py-1">Username :</h2>
            <h2 className="font-normal text-sm text-slate-500">{isUsername}</h2>
          </div>
          <div className="flex justify-between mr-4">
            <h2 className="text-sm font-bold py-1">Email : </h2>
            <h2 className="font-normal text-sm text-slate-500">{isEmail}</h2>
          </div>
          <div className="flex justify-between mr-4">
            <h2 className="text-sm font-bold py-1">Name : </h2>
            <h2 className="font-normal text-sm text-slate-500">{isName}</h2>
          </div>
          <div className="flex justify-between mr-4">
            <h2 className="text-sm font-bold py-1">Point : </h2>
            <h2 className="font-normal text-sm text-slate-500">{isPoints}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
