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
  const [toast, setToast] = useState(null);

  const emailValid = email.includes("@") && email.includes(".com");
  const usernameValid = username.length > 8;

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("login");
      if (!emailValid) {
        showToast("error", "Please enter a valid email address");
        return;
      }
      if (!usernameValid) {
        showToast("error", "Username must be at least 8 characters");
        return;
      }
      if (
        !email.trim() ||
        !username.trim() ||
        !firstName.trim() ||
        !lastName.trim()
      ) {
        showToast("error", "Incomplete form data.");
        return;
      }

      console.log(selectedImage);

      const formData = new FormData();
      formData.append("username", username.trim());
      formData.append("email", email.trim());
      formData.append("name", `${firstName.trim()} ${lastName.trim()}`);

      if (selectedImage) {
        formData.append("fileupload", selectedImage);
      }

      console.log(formData.get("fileupload"));

      const response = await axios.post(
        "http://localhost:4500/user/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        showToast(
          "success",
          response.data.message || "Profile updated successfully!"
        );
      } else {
        showToast(
          "error",
          response.data.message || "Failed to update profile."
        );
      }
    } catch (error) {
      console.error(error);
      showToast("error", "An error occurred while updating the profile.");
    }
  };

  useEffect(() => {
    const UserProfile = async () => {
      try {
        const token = localStorage.getItem("login");
        const response = await axios.get("http://localhost:4500/user/detail", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(selectedImage);
        const { email, username, name, img } = response.data.data;
        const [fName, lName] = name.split(" ");
        setSelectedImage(img);
        console.log(img);
        console.log(selectedImage);
        setEmail(email || "");
        setUsername(username || "");
        setFirstName(fName || "");
        setLastName(lName || "");
      } catch (error) {
        console.error(error);
      }
    };

    UserProfile();
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
                  {selectedImage && selectedImage instanceof Blob ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      className="w-full h-full object-cover"
                      alt="Profile"
                    />
                  ) : (
                    <img
                      src={`http://localhost:4500/public/profileimage/${selectedImage}`}
                      className="w-full h-full object-cover"
                      alt="Profile"
                    />
                  )}
                  <div className="absolute top-0 right-0">
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <LuImagePlus style={{ color: "black" }} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-1">
              <MiniForm
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={firstName}
              />
              <MiniForm
                label="Last Name"
                position="end"
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={lastName}
              />
            </div>
            <div className="py-1">
              <NormalForm
                placeholder="Username"
                label="Username*"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <NormalForm
                placeholder="Email"
                label="Email*"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-3/12 py-2">
              <ButtonRegister title="Update" onClick={handleUpdate} />
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
    </div>
  );
};

export default EditProfile;
