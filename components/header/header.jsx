import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { FaGithub, FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
const Header = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-secondary mb-3">
          <Container>
            <Navbar.Brand href="#"> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "40%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="navbar-nav flex-grow-1 justify-content-end">
                  <div className="d-flex flex-xxl-row flex-column align-content-end justify-content-end">
                    <li className="nav-item me-3">
                      <a className="nav-link" href="#banner">
                        <button
                          type="button"
                          className="btn btn-md border border-2 btn-outline-secondary"
                        >
                          <span>
                            <FaHome /> Home
                          </span>
                        </button>
                      </a>
                    </li>
                    <li className="nav-item me-3" href="#projects">
                      <a className="nav-link" href="#">
                        <button
                          type="button"
                          className="btn btn-md border btn-outline-secondary"
                        >
                          <GrProjects /> Projects
                        </button>
                      </a>
                    </li>
                    <li className="nav-item me-3">
                      <a className="nav-link" href="#about">
                        <button
                          type="button"
                          className="btn btn-md border btn-outline-secondary"
                        >
                          <GrTechnology /> About
                        </button>
                      </a>
                    </li>
                    <li className="nav-item me-3">
                      <a className="nav-link" href="#form">
                        <button
                          type="button"
                          className="btn btn-md border  btn-outline-secondary"
                        >
                          <IoMdPerson /> Contact
                        </button>
                      </a>
                    </li>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* <div className="border border-danger-subtle"></div> */}
    </>
  );
};

export default Header;
