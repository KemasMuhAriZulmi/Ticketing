import InputPass from "../view/InputPass";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InputPassPage = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <Navbar />
      <InputPass />
      <Footer />
    </div>
  );
};

export default InputPassPage;
