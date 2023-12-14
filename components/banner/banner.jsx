import "../../src/App.css";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  const url = import.meta.env.VITE_API_CLIENT_URL;

  return (
    <div className="bg-white banner" id="banner">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse  section section-pad gy-5">
          <div className="col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <h4 className="fw-normal mb-0 banner-sub-title animate">
                Hello, name is
              </h4>
              {/* <h4 className="fw-normal mb-0 banner-sub-title animate">
                Hello,
                <span>my</span>name is<span>AKASH B. KADAM</span>
              </h4> */}
              <h1 className="banner-title animate-section-title">
                <span>AKASH B. KADAM</span>
              </h1>
              <h4 className="fw-normal text-muted mb-4 banner-description desc-animate">
                I'm a full-stack developer specialized in frontend and backend
                development for scalable web apps. I have made a variety of MERN
                Stack Applications. Want to know how I may help your project?
                Check out my projects from my GitHub Profile. <span></span>
              </h4>
              <div className="d-flex gap-3 lead fw-normal banner-cta-btn">
                <button
                  type="button"
                  className="btn btn-secondary btn-md border border-2"
                >
                  <FaGithub /> GitHub
                </button>
                <button
                  type="button"
                  className="btn btn-md border border-2 btn-outline-secondary"
                >
                  <MdOutlineFileDownload /> Resume
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img
              src={`${url}images/portfolio.png`}
              alt="Portfolio"
              className="banner-image" // Added border classes
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
