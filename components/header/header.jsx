const Header = () => {
  return (
    <body>
      <nav className="navbar navbar-expand-md sticky-top border-bottom border-2 py-3">
        <div className="container">
          <ul className="navbar-nav flex-grow-1 justify-content-end">
            <li className="nav-item me-5">
              <a
                className="nav-link btn btn-md border border-secondary btn-outline-secondary rounded-3 px-3"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link btn btn-md border border-secondary btn-outline-secondary rounded-3 px-3"
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link btn btn-md border border-secondary btn-outline-secondary rounded-3 px-3"
                href="#"
              >
                Contact us
              </a>
            </li>
            <li className="nav-item me-5">
              <a
                className="nav-link btn btn-md border border-secondary btn-outline-secondary rounded-3 px-3"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="border border-danger-subtle"></div>
    </body>
  );
};

export default Header;
