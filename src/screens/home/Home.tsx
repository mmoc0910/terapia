import React from "react";
import {
  About,
  Blog,
  Feature,
  ModalVideo,
  Services,
  Team,
} from "./items";
import { useGetExperts } from "./methods/useGetExperts";
import { useGetBlog } from "./methods/useGetBlog";
import { useGetServices } from "./methods/useGetServices";

export function Home() {
  const { isLoading: isLoadingExperts } = useGetExperts();
  const { isLoading: isLoadingServices } = useGetServices();
  const { isLoading: isLoadingBlog } = useGetBlog();
  if (isLoadingBlog || isLoadingExperts || isLoadingServices)
    return (
      <div
        style={{
          padding: "200px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span classname="sr-only" style={{ color: "#000" }}>
          Loading...
        </span>
      </div>
    );
  return (
    <React.Fragment>
      <Services />
      <About />
      <Feature />
      <ModalVideo />
      <Team />
      <Blog />
    </React.Fragment>
  );
}
