import { Link } from "react-router-dom";
import ButtonRegister from "../components/Button-Register";
const ChangePass = () => {
  return (
    <div className="mx-auto">
      <div className="w-[600px] h-[400px] flex flex-col justify-center">
        <div className="w-[350px] mx-auto mb-8">
          <div className="mb-8 text-center">
            <h1 className="text-[32px] font-bold">Miro</h1>
          </div>
          <p className="text-[14px] text-[#808080]">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
          <div className="my-2">
            <p className="text-black">email</p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
              type="text"
              placeholder="email"
            ></input>
          </div>
          <div className="py-2">
            <ButtonRegister title="Submit" />
          </div>
          <div className="text-center pt-10">
            <p className="text-[14px">
              Back to dashboard?{" "}
              <Link
                to="/user-information"
                className=" text-blue-600 hover:text-slate-700 cursor-pointer"
              >
                Click me!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
