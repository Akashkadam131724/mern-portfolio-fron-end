// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Projects from "../components/projects/projects";
import ContactForm from "../components/contact-form/contact-form";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
