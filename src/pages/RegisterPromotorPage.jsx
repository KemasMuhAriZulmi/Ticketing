import Navbar from "../components/Header";
import RegisterPromotor from "../view/RegisterPromotor";
import Footer from "../components/Header";

const RegisterPromotorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <RegisterPromotor />
      <Footer></Footer>
    </div>
  );
};

export default RegisterPromotorPage;
