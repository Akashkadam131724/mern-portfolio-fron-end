// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";
import ContactForm from "../components/contact-form/contact-form";
import "reactflow/dist/style.css";
import About from "../components/About/About";

function App() {
  return (
    <>
      {/* #e2e2e2 !important */}
      <Header />
      <Banner />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
