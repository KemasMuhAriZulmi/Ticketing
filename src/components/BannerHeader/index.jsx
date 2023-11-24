import Banner from "../../assets/user-edit.jpg";
import { Link } from "react-router-dom";
const BannerHeader = () => {
  return (
    <div>
      <div>
        <div
          className="w-screen h-48 bg-gradient-to-r bg-cover bg-center from-cyan-500 to-blue-500 flex items-center"
          style={{ backgroundImage: `url("${Banner}")` }}
        >
          <div className="mx-auto">
            <div className="flex justify-center ">
              <h1 className="text-4xl text-white font-black">
                Organizer Signup
              </h1>
            </div>
            <div className="flex justify-center">
              <Link to="/user-information" className="text-white font-black">
                <h1 className="hover:text-sky-500">Dashboard</h1>
              </Link>
              <p className="mx-2 text-white font-black">/</p>
              <p className="text-white font-black">Signup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
