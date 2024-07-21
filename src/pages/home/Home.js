import React from "react";
import Hero from "../../assets/images/all/hero.png";
import About from "../../assets/images/all/about.jpg";
import NewsLetter from "../../assets/images/all/newsletter.png";
import Portfolio1 from "../../assets/images/all/portfolio-1.jpg";
import Portfolio2 from "../../assets/images/all/portfolio-2.jpg";
import Portfolio3 from "../../assets/images/all/portfolio-3.jpg";
import Portfolio4 from "../../assets/images/all/portfolio-4.jpg";
import Portfolio5 from "../../assets/images/all/portfolio-5.jpg";
import Portfolio6 from "../../assets/images/all/portfolio-6.jpg";
import Testi1 from "../../assets/images/all/testimonial-1.jpg"
import Testi2 from "../../assets/images/all/testimonial-2.jpg";
import Testi3 from "../../assets/images/all/testimonial-3.jpg";
import Testi4 from "../../assets/images/all/testimonial-4.jpg";
import Team1 from "../../assets/images/all/team-1.jpg"
import Team2 from "../../assets/images/all/team-2.jpg";
import Team3 from "../../assets/images/all/team-3.jpg";

function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <div class="container-xxl bg-white p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div
          id="spinner"
          class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            class="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div class="container-xxl position-relative p-0">
          <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
              <h1 class="m-0">
                <i class="fa fa-search me-2"></i>SEO
                <span class="fs-5">Master</span>
              </h1>
              {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ms-auto py-0">
                <a href="index.html" class="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" class="nav-item nav-link">
                  About
                </a>
                <a href="service.html" class="nav-item nav-link">
                  Service
                </a>
                <a href="project.html" class="nav-item nav-link">
                  Project
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu m-0">
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">
                  Contact
                </a>
              </div>
              <butaton
                type="button"
                class="btn text-secondary ms-3"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i class="fa fa-search"></i>
              </butaton>
              <a
                href="https://htmlcodex.com/startup-company-website-template"
                class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
              >
                Pro Version
              </a>
            </div>
          </nav>

          <div class="container-xxl py-5 bg-primary hero-header mb-5">
            <div class="container my-5 py-5 px-lg-5">
              <div class="row g-5 py-5">
                <div class="col-lg-6 text-center text-lg-start">
                  <h1 class="text-white mb-4 animated zoomIn">
                    All in one SEO tool need to grow your business rapidly
                  </h1>
                  <p class="text-white pb-3 animated zoomIn">
                    Tempor rebum no at dolore lorem clita rebum rebum ipsum
                    rebum stet dolor sed justo kasd. Ut dolor sed magna dolor
                    sea diam. Sit diam sit justo amet ipsum vero ipsum clita
                    lorem
                  </p>
                  <a
                    href=""
                    class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                  >
                    Free Quote
                  </a>
                  <a
                    href=""
                    class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div class="col-lg-6 text-center text-lg-start">
                  <img class="img-fluid" src={Hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Full Screen Search Start --> */}
        <div class="modal fade" id="searchModal" tabindex="-1">
          <div class="modal-dialog modal-fullscreen">
            <div
              class="modal-content"
              style={{ background: "rgba(29, 29, 39, 0.7)" }}
            >
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn bg-white btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body d-flex align-items-center justify-content-center">
                <div class="input-group" style={{ maxWidth: "600px" }}>
                  <input
                    type="text"
                    class="form-control bg-transparent border-light p-3"
                    placeholder="Type search keyword"
                  />
                  <button class="btn btn-light px-4">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Full Screen Search End --> */}

        {/* <!-- About Start --> */}
        <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div class="row g-5">
              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="section-title position-relative mb-4 pb-2">
                  <h6 class="position-relative text-primary ps-4">About Us</h6>
                  <h2 class="mt-2">
                    The best SEO solution with 10 years of experience
                  </h2>
                </div>
                <p class="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor eirmod magna dolore erat amet
                </p>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <h6 class="mb-3">
                      <i class="fa fa-check text-primary me-2"></i>Award Winning
                    </h6>
                    <h6 class="mb-0">
                      <i class="fa fa-check text-primary me-2"></i>Professional
                      Staff
                    </h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="mb-3">
                      <i class="fa fa-check text-primary me-2"></i>24/7 Support
                    </h6>
                    <h6 class="mb-0">
                      <i class="fa fa-check text-primary me-2"></i>Fair Prices
                    </h6>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <a class="btn btn-primary rounded-pill px-4 me-3" href="">
                    Read More
                  </a>
                  <a class="btn btn-outline-primary btn-square me-3" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square me-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square me-3" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-outline-primary btn-square" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  class="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src={About}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Newsletter Start --> */}
        <div
          class="container-xxl bg-primary newsletter my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container px-lg-5">
            <div class="row align-items-center" style={{ height: "250px" }}>
              <div class="col-12 col-md-6">
                <h3 class="text-white">Ready to get started</h3>
                <small class="text-white">
                  Diam elitr est dolore at sanctus nonumy.
                </small>
                <div class="position-relative w-100 mt-3">
                  <input
                    class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Enter Your Email"
                    style={{ height: "250px" }}
                  />
                  <button
                    type="button"
                    class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i class="fa fa-paper-plane text-primary fs-4"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                <img
                  class="img-fluid mt-5"
                  style={{ height: "250px" }}
                  src={NewsLetter}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Newsletter End --> */}

        {/* <!-- Service Start --> */}
        <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div
              class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 class="position-relative d-inline text-primary ps-4">
                Our Services
              </h6>
              <h2 class="mt-2">What Solutions We Provide</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">SEO Optimization</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">Web Design</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">Social Media Marketing</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">Email Marketing</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">PPC Advertising</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div class="service-icon flex-shrink-0">
                    <i class="fa fa-home fa-2x"></i>
                  </div>
                  <h5 class="mb-3">App Development</h5>
                  <p>
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a class="btn px-3 mt-auto mx-auto" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Portfolio Start --> */}
        <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div
              class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 class="position-relative d-inline text-primary ps-4">
                Our Projects
              </h6>
              <h2 class="mt-2">Recently Launched Projects</h2>
            </div>
            <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
              <div class="col-12 text-center">
                <ul class="list-inline mb-5" id="portfolio-flters">
                  <li class="btn px-3 pe-4 active" data-filter="*">
                    All
                  </li>
                  <li class="btn px-3 pe-4" data-filter=".first">
                    Design
                  </li>
                  <li class="btn px-3 pe-4" data-filter=".second">
                    Development
                  </li>
                </ul>
              </div>
            </div>
            <div class="row g-4 portfolio-container">
              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img class="img-fluid w-100" src={Portfolio1} alt="" />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-1.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
                data-wow-delay="0.3s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src={Portfolio2}
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-2.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src={Portfolio3}
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-3.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src={Portfolio4}
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-4.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
                data-wow-delay="0.3s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src={Portfolio5}
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-5.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div class="position-relative rounded overflow-hidden">
                  <img
                    class="img-fluid w-100"
                    src={Portfolio6}
                    alt=""
                  />
                  <div class="portfolio-overlay">
                    <a
                      class="btn btn-light"
                      href="img/portfolio-6.jpg"
                      data-lightbox="portfolio"
                    >
                      <i class="fa fa-plus fa-2x text-primary"></i>
                    </a>
                    <div class="mt-auto">
                      <small class="text-white">
                        <i class="fa fa-folder me-2"></i>Web Design
                      </small>
                      <a class="h5 d-block text-white mt-1 mb-0" href="">
                        Project Name
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Portfolio End --> */}

        {/* <!-- Testimonial Start --> */}
        <div
          class="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container py-5 px-lg-5">
            <div class="owl-carousel testimonial-carousel">
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <i class="fa fa-quote-left fa-2x mb-3"></i>
                <p>
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded-circle"
                    src={Testi1}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <i class="fa fa-quote-left fa-2x mb-3"></i>
                <p>
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded-circle"
                    src={Testi2}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <i class="fa fa-quote-left fa-2x mb-3"></i>
                <p>
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded-circle"
                    src={Testi3}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
              <div class="testimonial-item bg-transparent border rounded text-white p-4">
                <i class="fa fa-quote-left fa-2x mb-3"></i>
                <p>
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded-circle"
                    src={Testi4}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div class="ps-3">
                    <h6 class="text-white mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}

        {/* <!-- Team Start --> */}
        <div class="container-xxl py-5">
          <div class="container px-lg-5">
            <div
              class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 class="position-relative d-inline text-primary ps-4">
                Our Team
              </h6>
              <h2 class="mt-2">Meet Our Team Members</h2>
            </div>
            <div class="row g-4">
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item">
                  <div class="d-flex">
                    <div
                      class="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                      style={{ width: "75px" }}
                    >
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <img
                      class="img-fluid rounded w-100"
                      src={Team1}
                      alt=""
                    />
                  </div>
                  <div class="px-4 py-3">
                    <h5 class="fw-bold m-0">Jhon Doe</h5>
                    <small>CEO</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item">
                  <div class="d-flex">
                    <div
                      class="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                      style={{ width: "75px" }}
                    >
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <img
                      class="img-fluid rounded w-100"
                      src={Team2}
                      alt=""
                    />
                  </div>
                  <div class="px-4 py-3">
                    <h5 class="fw-bold m-0">Emma William</h5>
                    <small>Manager</small>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div class="team-item">
                  <div class="d-flex">
                    <div
                      class="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                      style={{ width: "75px" }}
                    >
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a
                        class="btn btn-square text-primary bg-white my-1"
                        href=""
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <img
                      class="img-fluid rounded w-100"
                      src={Team3}
                      alt=""
                    />
                  </div>
                  <div class="px-4 py-3">
                    <h5 class="fw-bold m-0">Noah Michael</h5>
                    <small>Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team End --> */}

        {/* <!-- Footer Start --> */}
        <div
          class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="container py-5 px-lg-5">
            <div class="row g-5">
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Get In Touch</h5>
                <p>
                  <i class="fa fa-map-marker-alt me-3"></i>123 Street, New York,
                  USA
                </p>
                <p>
                  <i class="fa fa-phone-alt me-3"></i>+012 345 67890
                </p>
                <p>
                  <i class="fa fa-envelope me-3"></i>info@example.com
                </p>
                <div class="d-flex pt-2">
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Popular Link</h5>
                <a class="btn btn-link" href="">
                  About Us
                </a>
                <a class="btn btn-link" href="">
                  Contact Us
                </a>
                <a class="btn btn-link" href="">
                  Privacy Policy
                </a>
                <a class="btn btn-link" href="">
                  Terms & Condition
                </a>
                <a class="btn btn-link" href="">
                  Career
                </a>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Project Gallery</h5>
                <div class="row g-2">
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio1}
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio2}
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio3}
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio4}
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio5}
                      alt="Image"
                    />
                  </div>
                  <div class="col-4">
                    <img
                      class="img-fluid"
                      src={Portfolio5}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <h5 class="text-white mb-4">Newsletter</h5>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </p>
                <div class="position-relative w-100 mt-3">
                  <input
                    class="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ width: "48px" }}
                  />
                  <button
                    type="button"
                    class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i class="fa fa-paper-plane text-primary fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container px-lg-5">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a class="border-bottom" href="#">
                    Your Site Name
                  </a>
                  , All Right Reserved. This template is free as long as you
                  keep the footer author’s credit link/attribution
                  link/backlink. If you'd like to use the template without the
                  footer author’s credit link/attribution link/backlink, you can
                  purchase the Credit Removal License from
                  "https://htmlcodex.com/credit-removal". Thank you for your
                  support. Designed By{" "}
                  <a class="border-bottom" href="https://htmlcodex.com">
                    HTML Codex
                  </a>
                  <br />
                  Distributed By:{" "}
                  <a
                    class="border-bottom"
                    href="https://themewagon.com"
                    target="_blank"
                  >
                    ThemeWagon
                  </a>
                </div>
                <div class="col-md-6 text-center text-md-end">
                  <div class="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#"
          class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
        >
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}
export default Home;