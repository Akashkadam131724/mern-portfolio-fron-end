import "../../src/App.css";

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="row flex-md-row flex-sm-row-reverse section section-pad gy-5">
          <div className="col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <h4 className="fw-normal mb-0 banner-sub-title">
                {" "}
                Hello, my name is{" "}
              </h4>
              <h1 className="banner-title">AKASH B. KADAM</h1>
              <h4 className="fw-normal text-muted mb-4 banner-description">
                I'm a full-stack developer specialized in frontend and backend
                development for scalable web apps. I have made a variety of MERN
                Stack Applications. Want to know how I may help your project?
                Check out my projects from my GitHub Profile.
              </h4>
              <div className="d-flex gap-3 lead fw-normal banner-cta-btn">
                <button
                  type="button"
                  className="btn btn-lg btn-outline-secondary"
                >
                  Resume
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-outline-secondary"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <img
              src="/images/portfolio.png"
              alt="Portfolio"
              className="banner-image img-fluid rounded-circle border rounded-sm-none border-black border-opacity-25 border-3" // Added border classes
              style={{ width: "250px", height: "250px" }} // Increase border width
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
