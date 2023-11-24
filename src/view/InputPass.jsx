import { useState } from "react";
import ButtonRegister from "../components/Button-Register";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const InputPass = () => {
  const navigate = useNavigate();
  const [isCurrentPass, setInCurrentPass] = useState("");
  const [isNewPass, setInNewPass] = useState("");
  const [isConfirmNewPass, setInConfirmNewPass] = useState("");

  const onHandleClick = async () => {
    const token = localStorage.getItem("login");

    if (!token) {
      navigate("/login-user");
    }
    try {
      console.log(isCurrentPass, isNewPass, isConfirmNewPass);
      if ((isCurrentPass, isNewPass, isConfirmNewPass)) {
        const response = await axios.post(
          "http://localhost:4500/user/update-password",
          {
            currentPassword: isCurrentPass,
            newPassword: isNewPass,
            confirmPassword: isConfirmNewPass,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success === true) {
          navigate("/user-information");
        } else {
          setInCurrentPass("");
          setInNewPass("");
          setInConfirmNewPass("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto">
      <div className="w-[600px] h-[400px] flex flex-col justify-center">
        <div className="w-[350px] mx-auto mb-8">
          <div className="mb-8 text-center">
            <h1 className="text-[32px] font-bold">Reset Password</h1>
          </div>
          <div className="my-2">
            <p className="text-black">current password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="password"
              placeholder="current password"
              onChange={(e) => setInCurrentPass(e.target.value)}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-black">new password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="password"
              placeholder="new password"
              onChange={(e) => setInNewPass(e.target.value)}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-black">confirm new password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="password"
              placeholder="confirm new password"
              onChange={(e) => setInConfirmNewPass(e.target.value)}
            ></input>
          </div>
          <div className="py-2">
            <ButtonRegister title="Submit" onClick={onHandleClick} />
          </div>
          <div className="text-center pt-10">
            <p className="text-[14px">
              Forgot Password?{" "}
              <Link
                to="/change-password"
                className=" text-blue-600 hover:text-slate-700 cursor-pointer"
              >
                Click me!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPass;
