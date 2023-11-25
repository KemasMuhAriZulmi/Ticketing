import { useRef, useState } from "react";
import ButtonRegister from "../components/Button-Register";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "../components/Alert";

const InputPass = () => {
  const navigate = useNavigate();
  const [isCurrentPass, setInCurrentPass] = useState("");
  const [isNewPass, setInNewPass] = useState("");
  const [isConfirmNewPass, setInConfirmNewPass] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const onHandleClick = async () => {
    if (!isCurrentPass || !isNewPass || !isConfirmNewPass) {
      showToast("error", "Please fill in all fields");
    }
    if (isNewPass !== isConfirmNewPass) {
      showToast("error", "New Password must be confirmed by Confirm Password");
    }
    const token = localStorage.getItem("login");

    if (!token) {
      navigate("/login-user");
    }

    try {
      if (isCurrentPass && isNewPass && isConfirmNewPass) {
        const response = await axios.post(
          "http://localhost:4500/user/updatepassword",
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
          showToast("success", "Password Updated");
          // Reset the form fields
          setInCurrentPass("");
          setInNewPass("");
          setInConfirmNewPass("");
        } else {
          showToast("error", "Failed to update password");
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
        </div>
      </div>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default InputPass;
