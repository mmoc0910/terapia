import React from "react";

export function About() {
  return (
    <div className="container-fluid about bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-img pb-5 ps-5">
              <img
                src="/img/about-1.jpg"
                className="img-fluid rounded w-100"
                style={{objectFit: 'cover'}}
                alt="Image"
              />
              <div className="about-img-inner">
                <img
                  src="/img/about-2.jpg"
                  className="img-fluid rounded-circle w-100 h-100"
                  alt="Image"
                />
              </div>
              {/* <div className="about-experience">15 years experience</div> */}
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="section-title text-start mb-5">
              <h4 className="sub-title pe-3 mb-0">About Us</h4>
              <h1 className="display-3 mb-4">
              Chúng tôi sẵn sàng giúp cải thiện quá trình điều trị của bạn.
              </h1>
              {/* <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                temporibus, eius nam mollitia voluptas maxime veniam
                necessitatibus saepe in ab? Repellat!
              </p> */}
              <div className="mb-4">
                <p className="text-secondary">
                  <i className="fa fa-check text-primary me-2"></i> Đặt lịch nhanh chóng
                </p>
                <p className="text-secondary">
                  <i className="fa fa-check text-primary me-2"></i> Dịch vụ chu đáo
                </p>
                <p className="text-secondary">
                  <i className="fa fa-check text-primary me-2"></i> Thanh toán dễ dàng
                </p>
              </div>
              <a
                href="#"
                className="btn btn-primary rounded-pill text-white py-3 px-5"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
