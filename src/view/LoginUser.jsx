import FormEye from "../components/Form-Eye";
import NormalForm from "../components/Form-Normal";
import ButtonRegister from "../components/Button-Register";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Toast from "../components/Alert";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inError, setError] = useState("");
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const onLogin = async () => {
    console.log("MASUK");
    console.log(email);
    console.log(password);
    try {
      if (email && password) {
        const response = await axios.post("http://localhost:4500/user/login", {
          email,
          password,
        });
        localStorage.setItem("login", response.data.token);
        navigate("/user-information");
      } else {
        console.log("MASUK ELSE");
        setError("Account not found");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      showToast("error", "Email or Password invalid.");
    }
  };

  useEffect(() => {
    const isLogedInToken = localStorage.getItem("login");
    if (isLogedInToken) {
      navigate("/user-information");
    }
  }, []);

  return (
    <div>
      <div className="w-10/12 mx-auto my-12 shadow-2xl rounded-xl p-3 max-w-md">
        <div>
          <h1 className="text-xl font-bold">Masuk untuk membeli tiket</h1>
          <div className="flex py-3">
            <p className="text-xs font-medium text-slate-400">
              Belum punya akun?
            </p>
            <Link
              to="/register-user"
              className="ml-1 text-xs text-blue-600 hover:text-slate-700"
            >
              Daftar
            </Link>
          </div>
          <div className="my-2">
            <NormalForm
              placeholder="email"
              label="email *"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <FormEye
              label="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 mb-2">
          <ButtonRegister title="Sign In" onClick={onLogin}></ButtonRegister>
        </div>
        <Link
          to="/change-password"
          className=" text-blue-600 hover:text-slate-700 cursor-pointer "
        >
          Forgot Password!
        </Link>
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

export default LoginUser;
