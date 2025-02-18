import React from "react";
import { BookAppointment } from "../home/items/BookAppointment";

export function Appointment() {
  return (
    <React.Fragment>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Book Appointment
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Appointment</li>
          </ol>
        </div>
      </div>
      <BookAppointment />
    </React.Fragment>
  );
}
