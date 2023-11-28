import Navbar from "../components/Header";
import Footer from "../components/Footer";
import LoginUser from "../view/LoginUser";

const LoginUserPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar></Navbar>
      <LoginUser></LoginUser>
      <Footer></Footer>
    </div>
  );
};

export default LoginUserPage;
