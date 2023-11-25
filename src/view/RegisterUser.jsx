import ButtonRegister from "../components/Button-Register";
import MiniForm from "../components/Form-Mini";
import NormalForm from "../components/Form-Normal";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Toast from "../components/Alert";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setInUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [inRefferal, setRefferalCode] = useState("");
  const [inEror, setError] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const onRegister = async () => {
    const emailValid = email.includes("@") && email.includes(".com");
    const usernameValid = username.length > 8;
    const passwordValid = password.length > 8 && password === confirmPassword;

    console.log(
      email,
      password,
      confirmPassword,
      username,
      fname,
      lname,
      inRefferal
    );

    try {
      if (email && password && confirmPassword && username && fname && lname) {
        if (!passwordValid) {
          return showToast(
            "error",
            "Password must be at least 8 characters and equal to confirm password"
          );
        }
        if (!usernameValid) {
          return showToast("error", "Username must be at least 8 character");
        }
        if (!emailValid) {
          return showToast("error", "Email must filled in correct");
        }
        if ((emailValid, usernameValid, passwordValid)) {
          console.log(inRefferal);
          if (!inRefferal) {
            console.log("masuk");
            const test = await axios.post(
              "http://localhost:4500/user/register",
              {
                email,
                password,
                confirmPassword,
                username,
                name: `${fname} ${lname}`,
              }
            );
            console.log("test", test.data);
            navigate("/login-user");
          } else {
            const test = await axios.post(
              "http://localhost:4500/user/register",
              {
                email,
                password,
                confirmPassword,
                username,
                name: fname + lname,
                refferal: inRefferal,
              }
            );
            console.log("test", test);
            navigate("/login-user");
          }
        }
      } else {
        console.log("MASUK ELSE");
        showToast("error", "Incomplete form data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-10/12 mx-auto my-12 shadow-2xl rounded-xl p-3 max-w-md">
        <div>
          <h1 className="text-xl font-bold">Masuk untuk membeli tiket</h1>
          <div className="flex py-3">
            <p className="text-xs font-medium text-slate-400">
              Have an account?
            </p>
            <Link
              to="/login-user"
              className="ml-1 text-xs text-blue-600 hover:text-slate-700"
            >
              Sign in
            </Link>
          </div>
          <div className="py-2 flex">
            <MiniForm
              label="first Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <MiniForm
              label="last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="py-1">
            <NormalForm
              placeholder="username"
              label="username *"
              onChange={(e) => setInUsername(e.target.value)}
            />
          </div>
          <div className="py-1">
            <NormalForm
              placeholder="email"
              label="email *"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-1">
            <NormalForm
              placeholder="password"
              label="password *"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="py-1">
            <NormalForm
              placeholder="confirm password"
              label="confirm password *"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="py-1">
            <NormalForm
              label="Referral Code"
              placeholder="Enter Referral Code (if any)"
              onChange={(e) => setRefferalCode(e.target.value)}
            />
          </div>
          <div className="py-6">
            <ButtonRegister title="Sign Up" onClick={onRegister} />
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

export default RegisterUser;
