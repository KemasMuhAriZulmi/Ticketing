import ResetPass from "../view/ResetPass";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const ResetPassPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <ResetPass />
      <Footer />
    </div>
  );
};

export default ResetPassPage;
