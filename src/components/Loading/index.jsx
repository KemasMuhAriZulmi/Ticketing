// src/components/Loading.jsx
import React, { useEffect, useState } from "react";

const Loading = ({ text = "Loading..." }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-bold">{text + dots}</p>
    </div>
  );
};

export default Loading;
