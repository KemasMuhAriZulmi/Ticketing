import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuImagePlus } from "react-icons/lu";
import LargerNavbar from "../components/User-Navbar-Lg";
import MiniForm from "../components/Form-Mini";
import NormalForm from "../components/Form-Normal";
import ButtonRegister from "../components/Button-Register";
import BannerHeader from "../components/BannerHeader";
import Toast from "../components/Alert";

const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && /\.(jpg|jpeg|png)$/i.test(file.name)) {
      setSelectedImage(file);
    } else {
      console.error(
        "Invalid file type. Please choose a JPG, JPEG, or PNG image."
      );
    }
  };

  const OnhandleUpdate = async () => {
    const token = localStorage.getItem("login");
    try {
      console.log(email);
      if (email && username && firstName && lastName) {
        const response = await axios.post(
          "http://localhost:4500/user/update",
          { username, email, name: `${firstName} ${lastName}` },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response) {
          showToast("success", "Profile updated successfully!");
        }
      } else {
        showToast("error", "Incomplete form data.");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
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
        console.log(secondResponse.data.data);
        const { email, username, name } = secondResponse.data.data;
        const [fName, lName] = name.split(" ");
        setEmail(email || "");
        setUsername(username || "");
        setFirstName(fName || "");
        setLastName(lName || "");
      } catch (error) {
        console.error(error);
      }
    };

    result();
  }, []);

  return (
    <div>
      <BannerHeader />
      <div className="flex w-full mx-auto">
        <div className="flex mx-auto">
          <div className="hidden md:block my-12 rounded-xl mx-2 shadow-xl w-[250px] bg-[#0A2B55] h-[250px]">
            <LargerNavbar />
          </div>
          <div className="my-12 mx-2 w-[500px] ml-6 max-w-md">
            <div className="pt-4">
              <h4 className="font-bold text-2xl">Edit Profile</h4>
            </div>
            <div>
              <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
            </div>
            <div>
              <div className="relative inline-block">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={
                      selectedImage ? URL.createObjectURL(selectedImage) : ""
                    }
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                  <div className="absolute top-0 right-0">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <LuImagePlus style={{ color: "black" }} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-1">
              <MiniForm
                label="first name"
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={firstName}
              />
              <MiniForm
                label="last name"
                position="end"
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={lastName}
              />
            </div>
            <div className="py-1">
              <NormalForm
                placeholder="username"
                label="username*"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <NormalForm
                placeholder="email"
                label="email*"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-3/12 py-2">
              <ButtonRegister title="Update" onClick={OnhandleUpdate} />
            </div>
            {successMessage && (
              <div className="bg-green-500 text-white p-4 mt-4">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-500 text-white p-4 mt-4">
                {errorMessage}
              </div>
            )}
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

export default EditProfile;
