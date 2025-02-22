import React from "react";
import { useParams } from "react-router";
import { useQueryBlogDetail } from "./modules/useQueryBlogDetail";
import parse from 'html-react-parser';

export function BlogDetail() {
  const { data } = useQueryBlogDetail();
  if (!data) return;
  return (
    <React.Fragment>
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Blog
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
            <li className="breadcrumb-item active text-primary">Blog</li>
          </ol>
        </div>
      </div>
      <div class="container-fluid blog py-5">
        <div class="container py-5">
          <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="sub-style">
              <h4 class="sub-title px-3 mb-0">{data.author}</h4>
            </div>
            <h1 class="display-3 mb-4">{data.title}</h1>
            <div class="mb-0">
             {parse(data.content)}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
