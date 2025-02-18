import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">
                  <i className="fas fa-star-of-life me-3"></i>Terapia
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus dolorem impedit eos autem dolores laudantium quia,
                  qui similique
                </p>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Quick Links</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> About Us
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Contact Us
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Privacy Policy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Terms & Conditions
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Our Blog & News
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Our Team
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Terapia Services</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> All Services
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Physiotherapy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Diagnostics
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Manual Therapy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Massage Therapy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Rehabilitation
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Contact Info</h4>
                <a href="">
                  <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New
                  York, USA
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2"></i> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2"></i> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-phone me-2"></i> +012 345 67890
                </a>
                <a href="" className="mb-3">
                  <i className="fas fa-print me-2"></i> +012 345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2"></i>Your Site
                  Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By{" "}
              <a className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
