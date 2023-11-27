import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa";
import LargerNavbar from "../components/User-Navbar-Lg";
import axios from "axios";

const Refferal = () => {
  const [isPoints, setInPoints] = useState();
  const [isCode, setInCode] = useState();

  useEffect(() => {
    const result = async () => {
      try {
        console.log("NICE");
        const secondToken = localStorage.getItem("login");
        const firstResponse = await axios.get(
          "http://localhost:4500/user/detail",
          {
            headers: {
              Authorization: `Bearer ${secondToken}`,
            },
          }
        );
        const userDetails = firstResponse.data.data;
        setInPoints(userDetails.points);
        const secondResponse = await axios.get(
          "http://localhost:4500/refferals/",
          {
            headers: {
              Authorization: `Bearer ${secondToken}`,
            },
          }
        );
        console.log(secondResponse.data.data.refferal);
        const userRefferals = secondResponse.data.data.refferal;
        setInCode(userRefferals);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);
  return (
    <div>
      <div className="flex w-full mx-auto">
        <div className="flex mx-auto">
          <div className="hidden md:block my-12 rounded-xl mx-2 shadow-xl w-[240px] bg-[#0A2B55] h-[250px]">
            <LargerNavbar></LargerNavbar>
          </div>
          <div className="w-10/12 my-12 shadow-2xl mx-2 rounded-xl p-3 px-6 max-w-md">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Referral Program</h1>
            </div>
            <div>
              <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
            </div>
            <p className="font-bold pb-2 text-lg">
              Your Unique Referral Code: {isCode}
            </p>
            <p className="text-sm text-slate-500 mb-2">
              Share this code with friends and earn points together!
            </p>

            <div>
              <h2 className="text-lg font-bold mb-2">Benefits:</h2>
              <ul className="text-sm text-slate-500">
                <li>
                  Earn points for every friend who signs up using your code.
                </li>
                <li>
                  Redeem points for exciting rewards available on our platform.
                </li>
                <li>
                  Help friends get started with a bonus by using your code
                  during registration.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2 mt-4">
                How to Share Your Code:
              </h2>
              <p className="text-sm text-slate-500 mb-2">
                Use the following methods to share your code and start earning
                points:
              </p>
              <ul className="text-sm text-slate-500">
                <li>Copy the code and share it via email or messaging apps.</li>
                <li>
                  Use the social media sharing options provided below to reach a
                  wider audience.
                </li>
              </ul>
            </div>
          </div>
          <div class="w-10/12 my-12 shadow-2xl mx-2 rounded-xl p-3 px-6 max-w-md">
            <div class="flex justify-between">
              <h1 class="text-xl font-bold">Your Reffering</h1>
            </div>
            <div>
              <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
            </div>
            <div className="">
              <div>
                <h1 className="text-xl font-bold">Your Rewards</h1>
                <h1 className="text-3xl">{isPoints}</h1>
                <p className="text-sm text-slate-500">
                  Your total amount points you have earned by reffering your
                  friends
                </p>
                <div className="w-full h-[1px] my-4 bg-slate-300 mx-auto"></div>
                <p className="text-sm text-slate-500">
                  Unlock the magic of your points by exchanging them for a
                  dazzling array of vouchers and thrilling rewards!
                </p>
              </div>
              <div className="py-4">
                <h1 className="text-lg font-bold mb-2 mt-1">
                  Share through your social media
                </h1>
                <div className="p-4">
                  <div className="flex justify-around">
                    <FaFacebook
                      size={"48px"}
                      className="mx-2 cursor-pointer"
                      style={{ color: "#3b5998" }}
                    />
                    <FaTwitter
                      size={"48px"}
                      className="mx-2 cursor-pointer"
                      style={{ color: "#3b5998" }}
                    />
                    <FaWhatsapp
                      size={"48px"}
                      className="mx-2 cursor-pointer"
                      style={{ color: "#3b5998" }}
                    />
                    <FaTelegram
                      size={"48px"}
                      className="mx-2 cursor-pointer"
                      style={{ color: "#3b5998" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refferal;
