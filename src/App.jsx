// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
// import Projects from "../components/projects/projects";

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_SERVER}/user`); // Assuming this route is set up on your server
  //       const result = await response.json();
  //       setData(result.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <Banner />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;

{
  /* <div className="container">
        <div className="row row-cols-2 g-2">
          <div className="col">
            <div className="box">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                officia labore tempora voluptates at nisi, deserunt nam
                laudantium maiores molestiae fugiat voluptatibus iure doloribus
                quam dolor consequuntur ipsum? Eos, optio?
              </p>
            </div>
          </div>
          <div className="col">
            <div className="box">lorem5</div>
          </div>
        </div>
        <div className="my-4 border border-danger-subtle"></div>
        <div className="px-3 py-2 border border-secondary rounded-pill">
          Centered element
        </div>
        <div className="my-4 border border-danger-subtle"></div>
      </div> */
}
