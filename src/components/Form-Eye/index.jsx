import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormEye = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium py-1">
          {props.label + "*"}
        </label>
        <div className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none flex">
          <input
            className="py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:shadow-outline w-[90%]"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={props.label}
            onChange={props.onChange}
          />
          <button
            className="ml-2 px-3 py-1 text-white bg-sky-500 rounded focus:outline-none hover:bg-sky-700"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEye;
