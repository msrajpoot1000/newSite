import React from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css"; // Ensure you create this CSS file if needed

function ContactPage() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-search me-2"></i>SEO
              <span className="fs-5">Master</span>
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/projects" className="nav-item nav-link">
                Project
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="/404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link active">
                Contact
              </Link>
            </div>
            <button
              type="button"
              className="btn text-secondary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
            <a
              href="https://htmlcodex.com/startup-company-website-template"
              className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
            >
              Pro Version
            </a>
          </div>
        </nav>

        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated zoomIn">Contact Us</h1>
                <hr
                  className="bg-white mx-auto mt-0"
                  style={{ width: "90px" }}
                />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link className="text-white" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link className="text-white" to="#">
                        Pages
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(29, 29, 39, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-light px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <h6 className="position-relative d-inline text-primary ps-4">
                  Contact Us
                </h6>
                <h2 className="mt-2">Contact For Any Query</h2>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Footer Start */}
      <div
        className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/privacy">
                Privacy Policy
              </Link>
              <Link className="btn btn-link" to="/terms">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="/career">
                Career
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Project Gallery</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-4.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-5.jpg"
                    alt="Image"
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src="img/portfolio-6.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                Curabitur facilisis ornare velit non vulpu
              </p>
              <div className="position-relative w-100 mt-3">
                <input
                  className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Your Email"
                  style={{ height: "48px" }}
                />
                <button
                  type="button"
                  className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/">Home</Link>
                  <Link to="/cookies">Cookies</Link>
                  <Link to="/help">Help</Link>
                  <Link to="/faqs">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default ContactPage;
