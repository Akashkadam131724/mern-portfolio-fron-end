// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";
import ContactForm from "../components/contact-form/contact-form";
import About from "../components/About/About";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/esm/Spinner";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  //   VITE_API_SERVER = https://mern-portfolio-vsfk.onrender.com
  // VITE_API_CLIENT_URL = https://akashkadam131724.github.io/mern-portfolio-fron-end/

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);
  return (
    <>
      {showLoader ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <Spinner animation="border" />

          <div>Loading...</div>
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <Projects />
          <About />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
