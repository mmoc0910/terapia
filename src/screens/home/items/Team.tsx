import React from "react";
import { useGetExperts } from "../methods/useGetExperts";

export function Team() {
  const { data } = useGetExperts();
  if (!data || data.length === 0) return;
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Meet our team</h4>
          </div>
          <h1 className="display-3 mb-4">
            Physiotherapy Services from Professional Therapist
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {data.map((item) => (
            <div
              key={item._id}
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                  <img
                    src="/img/team-1.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="team-icon d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-primary text-white rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary text-white rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary text-white rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-primary text-white rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                  <h5>{item.fullName}</h5>
                  <p className="mb-0">{item.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
