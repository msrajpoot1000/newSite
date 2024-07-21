import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
          <h1 class="m-0">
            <i class="fa fa-search me-2"></i>ExternHub
            <span class="fs-5">Solutions</span>
          </h1>
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
            <a onClick={() => navigate("/")} class="nav-item nav-link active">
              Home
            </a>
            <a onClick={() => navigate("/about")} class="nav-item nav-link">
              About
            </a>
            <a onClick={() => navigate("/services")} class="nav-item nav-link">
              Service
            </a>
            <a onClick={() => navigate("/projects")} class="nav-item nav-link">
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
            <a onClick={() => navigate("/contact")} class="nav-item nav-link">
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
    </div>
  );
}
export default Header;
