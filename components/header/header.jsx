const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top bg-dark-subtle">
        <div className="container">
          <div className="navbar-nav flex-grow-1 justify-content-end">
            <div className="d-flex align-content-end justify-content-end">
              <li className="nav-item me-3">
                <a className="nav-link" href="#banner">
                  <button type="button" className="btn">
                    Home
                  </button>
                </a>
              </li>
              <li className="nav-item me-3" href="#projects">
                <a className="nav-link" href="#">
                  <button type="button" className="btn  ">
                    Projects
                  </button>
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#about">
                  <button type="button" className="btn  ">
                    About
                  </button>
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#form">
                  <button type="button" className="btn  ">
                    Contact
                  </button>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="border border-danger-subtle"></div> */}
    </>
  );
};

export default Header;
