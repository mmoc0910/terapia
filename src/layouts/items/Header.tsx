import React from "react";
import { useAppAccount } from "../../utils";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const { account, setAccount } = useAppAccount();
  console.log("account ~ ", account);
  const signOut = () => {
    setAccount(null);
    navigate("/sign-in");
  };
  const renderButton = () => {
    if (!account)
      return (
        <Link
          to="/sign-in"
          className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
        >
          Sign in
        </Link>
      );
    return (
      <>
        {/* <a
          href="/book-appointment"
          className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
        >
          Book Appointment
        </a> */}
        <button
          onClick={signOut}
          type="button"
          className="btn btn-warning rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
          style={{ marginLeft: "10px" }}
        >
          Sign out
        </button>
      </>
    );
  };
  return (
    <React.Fragment>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-light me-4">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                Find A Location
              </a>
              <a href="#" className="text-light me-4">
                <i className="fas fa-phone-alt text-primary me-2"></i>
                +01234567890
              </a>
              <a href="#" className="text-light me-0">
                <i className="fas fa-envelope text-primary me-2"></i>
                Example@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a
                href="#"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-square border rounded-circle nav-fill me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-square border rounded-circle nav-fill me-0"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <Link href="/" className="navbar-brand p-0">
            {/* <h1 className="text-primary m-0">
              <i className="fas fa-star-of-life me-3"></i>Terapia
            </h1> */}
            <img
              src="/img/z6330573034820_9551857ff9fac970a1fe2f6816aa97d5.jpg"
              alt="Logo" style={{width: '200px', objectFit: 'cover'}}
            />
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
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              {account ? (
                <Link to="/my-appointment" className="nav-item nav-link">
                  My Appointment
                </Link>
              ) : null}

              {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/book-appointment" className="dropdown-item">
                    Appointment
                  </a>
                  <a href="feature.html" className="dropdown-item">
                    Features
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Our Blog
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div> */}
              {/* <a href="contact.html" className="nav-item nav-link">
                Contact Us
              </a> */}
            </div>
            {renderButton()}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
