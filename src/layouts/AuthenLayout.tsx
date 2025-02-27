import React from "react";
import { Outlet } from "react-router";

export function AuthenLayout() {
  return (
    <div
      className="row container-fluid appointment py-5"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.4s">
        <div className="appointment-form rounded p-5">
          <a href="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fas fa-star-of-life me-3"></i>AB Heatlh Tech
            </h1>
            {/* <!-- <img src="/img/logo.png" alt="Logo"> --> */}
          </a>
          <p className="fs-4 text-uppercase text-primary">Welcome to AB Heatlh Tech!</p>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
