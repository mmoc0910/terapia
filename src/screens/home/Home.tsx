import React from "react";
import {
  About,
  Blog,
  Feature,
  ModalVideo,
  Services,
  Team,
  Testimonial,
} from "./items";

export function Home() {
  return (
    <React.Fragment>
      {/* <HomeBanner /> */}
      <Services />
      <About />
      <Feature />
      {/* <BookAppointment /> */}
      <ModalVideo />
      <Team />
      <Testimonial />
      <Blog />
    </React.Fragment>
  );
}
