import React from "react";
import { Outlet } from "react-router";
import Header from "./items/Header";
import Footer from "./items/Footer";

export function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </React.Fragment>
  );
}
