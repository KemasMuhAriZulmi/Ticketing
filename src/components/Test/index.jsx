import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Test = () => {
  let location = useLocation();
  const urlParams = location.pathname;
  console.log(urlParams);
  const token = urlParams.split("/")[2];
  console.log(token);
  const verifEmail = () => {
    axios.patch(
      `http://localhost:2077/users/verify/${token}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  useEffect(() => {
    const urlParams = location.pathname;
    console.log(urlParams);
    const token = urlParams.split("/")[2];
    console.log(token);
  }, []);

  return (
    <div>
      <h1>Test</h1>
      <button onClick={verifEmail}>Verify</button>
    </div>
  );
};

export default Test;
