/** @format */

import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeaderSection from "./Components/Header";
import Project from "./Components/Project";
import Testimonal from "./Components/Testimonal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <div className='w-full overflow-hidden '>
        <ToastContainer />
        <HeaderSection />
        <About />
        <Project />
        <Testimonal />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
