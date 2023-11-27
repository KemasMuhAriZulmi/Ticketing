import ButtonRegister from "../components/Button-Register";
import MiniForm from "../components/Form-Mini";
import NormalForm from "../components/Form-Normal";
import Banner from "../assets/Promotor-Background.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Toast from "../components/Alert";

const RegisterPromotor = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [username, setInUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
    console.log("MASUK");
    console.log(email, password, confirmpassword, username, fname, lname);
    try {
      if (email && password && confirmpassword && username && fname && lname) {
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
        const test = await axios.post(
          "http://localhost:4500/promotor/register",
          {
            email,
            password,
            confirmpassword,
            username,
            name: fname + lname,
          }
        );
        console.log("test", test.data);
        navigate("/login-promotor");
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
      {/* NOTE : BUTUH SLICHING */}
      <div
        className="w-screen h-48 bg-gradient-to-r bg-cover bg-center from-cyan-500 to-blue-500 flex items-center"
        style={{ backgroundImage: `url("${Banner}")` }}
      >
        <div className="mx-auto">
          <div className="flex justify-center ">
            <h1 className="text-4xl text-white font-black">Organizer Signup</h1>
          </div>
          <div className="flex justify-center">
            <Link to="/" className="text-white font-black">
              <h1 className="hover:text-sky-500">Home</h1>
            </Link>
            <p className="mx-2 text-white font-black">/</p>
            <p className="text-white font-black">Signup</p>
          </div>
        </div>
      </div>

      {/* NOTE : BUTUH SLICHING */}

      {/* NOTE : BUTUH SLICHING */}

      {/* Form */}

      <div className=" mx-auto max-w-md">
        <div className="py-16">
          <div id="wrapper" className="mx-4">
            <div id="name-&-username" className="flex my-4">
              <MiniForm
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
              <MiniForm
                label="Last Name"
                position="end"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div id="name-&-username" className="flex my-4">
              <NormalForm
                label="Username"
                placeholder="Username"
                onChange={(e) => setInUsername(e.target.value)}
              />
            </div>
            <div id="email-addres">
              <NormalForm
                label="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div id="password-&-confirmpassword" className="flex my-4">
              <MiniForm
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MiniForm
                label="Confirm Password"
                position="end"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div id="button-register-promotor">
              <ButtonRegister title="Sign Up" onClick={onRegister} />
            </div>
            <div id="have-acount" className="flex">
              <p className="mx-1">Have an account? </p>
              <Link
                to="/login-promotor"
                className="font-medium  text-blue-600 hover:text-slate-700"
              >
                Masuk Sekarang
              </Link>
            </div>
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
      {/* NOTE : BUTUH SLICHING */}
    </div>
  );
};

export default RegisterPromotor;
