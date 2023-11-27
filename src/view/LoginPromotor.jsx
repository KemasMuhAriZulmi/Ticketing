import React, { useState } from "react";
import axios from "axios";
import NormalForm from "../components/Form-Normal";
import ButtonRegister from "../components/Button-Register";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LoginPromotor = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inError, setError] = useState("");
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      if (email && password) {
        const response = await axios.post(
          "http://localhost:4500/promotor/login",
          {
            email,
            password,
          }
        );
        console.log("masuk");
        console.log("Response:", response.data.result);
        console.log(typeof response.data.token);
        localStorage.setItem("login", response.data.token);
        navigate("/user-information");
      } else {
        setError("Account not found");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    var isLogedIn = localStorage.getItem("login");
    if (isLogedIn) {
      navigate("/user-information");
    }
  }, []);

  return (
    <div className="w-10/12 mx-auto my-12 shadow-2xl rounded-xl p-3 max-w-md">
      <h1 className="text-xl font-bold">Masuk untuk membuat event</h1>
      <div className="flex py-3">
        <p className="text-xs font-medium text-slate-400">Belum punya akun?</p>
        <Link
          to="/register-promotor"
          className="ml-1 text-xs text-blue-600 hover:text-slate-700"
        >
          Daftar
        </Link>
      </div>
      <div className="py-2">
        <NormalForm
          placeholder="email"
          label="email *"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="py-2">
        <NormalForm
          label="password *"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="py-3">
        <ButtonRegister title="Sign In" onClick={onLogin} label="Login" />
      </div>
      {inError && <p className="text-red-500">{inError}</p>}
      <div>
        <Link
          to="/change-password"
          className="text-xs font-medium text-slate-400 pb-3"
        >
          Lupa Kata Sandi?
        </Link>
      </div>
    </div>
  );
};

export default LoginPromotor;
