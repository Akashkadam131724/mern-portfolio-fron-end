const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top border-bottom border-2 py-3 bg-body-tertiary">
        <div className="container">
          <div className="navbar-nav flex-grow-1 justify-content-end">
            <div className="d-flex align-content-end justify-content-end">
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  <button
                    type="button"
                    className="btn rounded btn-outline-secondary"
                  >
                    Home
                  </button>
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  <button
                    type="button"
                    className="btn rounded btn-outline-secondary"
                  >
                    Projects
                  </button>
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  <button
                    type="button"
                    className="btn rounded btn-outline-secondary"
                  >
                    About
                  </button>
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  <button
                    type="button"
                    className="btn rounded btn-outline-secondary"
                  >
                    Contact
                  </button>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className="border border-danger-subtle"></div>
    </>
  );
};

export default Header;
