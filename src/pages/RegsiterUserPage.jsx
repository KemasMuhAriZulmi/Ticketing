import Navbar from "../components/Header";
import RegisterUser from "../view/RegisterUser";
import Footer from "../components/Footer";

const RegisterUserPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <RegisterUser />
      <Footer />
    </div>
  );
};

export default RegisterUserPage;
