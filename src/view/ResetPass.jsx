import { useState } from "react";
import ButtonRegister from "../components/Button-Register";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPass = () => {
  const navigate = useNavigate();
  const [isNewPass, setNewPass] = useState("");
  const [isConfirmNewPass, setConfirmNewPass] = useState("");

  const onHandleClick = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const paramsToken = urlParams.get("token");
    console.log(paramsToken);

    if (!paramsToken) {
      navigate("/login-user");
      return;
    }

    try {
      console.log(isNewPass, isConfirmNewPass);

      if (isNewPass && isConfirmNewPass) {
        const response = await axios.post(
          "http://localhost:4500/user/updatepass",
          {
            password: isNewPass,
            confirmPassword: isConfirmNewPass,
          },
          {
            headers: {
              Authorization: `Bearer ${paramsToken}`,
            },
          }
        );

        if (response.data.success === true) {
          navigate("/user-information");
        } else {
          setNewPass("");
          setConfirmNewPass("");
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
            <p className="text-black">new password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="password"
              placeholder="new password"
              value={isNewPass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
          </div>
          <div className="my-2">
            <p className="text-black">confirm new password</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="password"
              placeholder="confirm new password"
              value={isConfirmNewPass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
            ></input>
          </div>
          <div className="py-2">
            <ButtonRegister title="Submit" onClick={onHandleClick} />
          </div>
          <div className="text-center pt-10">
            <p className="text-[14px]">
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

export default ResetPass;
