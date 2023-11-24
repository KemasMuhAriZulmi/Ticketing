import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChangePass from "../view/ChangePass";

const ChangePassPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <ChangePass />
      <Footer />
    </div>
  );
};

export default ChangePassPage;
