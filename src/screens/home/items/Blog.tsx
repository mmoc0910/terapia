import React from "react";
import { useGetBlog } from "../methods/useGetBlog";
import dayjs from "dayjs";
import { Link } from "react-router";

export function Blog() {
  const { data } = useGetBlog();
  if (!data || data.length === 0) return;
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Our Blog</h4>
          </div>
          <h1 className="display-3 mb-4">
            Excellent Facility and High Quality Therapy
          </h1>
          {/* <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p> */}
        </div>
        <div className="row g-4 justify-content-center">
          {data.map((item) => (
            <div
              key={item._id}
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="blog-item rounded">
                <div className="blog-img">
                  <img
                    src="/img/blog-1.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="blog-centent p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <p className="mb-0 text-muted">
                      <i className="fa fa-calendar-alt text-primary"></i>
                      {dayjs(item.published).format("DD/MM/YYYY")}
                    </p>
                    {/* <a href="#" className="text-muted">
                      <span className="fa fa-comments text-primary"></span> 3
                      Comments
                    </a> */}
                  </div>
                  <a href="#" className="h4">
                    {item.title}
                  </a>
                  <p className="my-4">{item.author}</p>
                  <Link
                    to={`/blog/${item._id}`}
                    className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
