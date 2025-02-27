import React from "react";
import { useGetServices } from "../methods/useGetServices";
import { Link } from "react-router";

export function Services() {
  const { data } = useGetServices();
  console.log("data ~ ", data);
  if (!data || data.length === 0) return;
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">What We Do</h4>
          </div>
          <h1 className="display-3 mb-4">
            DỊCH VỤ MASSAGE THƯ GIÃN CƠ XƯƠNG KHỚP ĐƯỢC THỰC HIỆN BỞI ĐỘI NGŨ
            LÀNH NGHỀ GIÀU KINH NGHIỆM
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
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={item?.imageUrl || "/img/service-1.jpg"}
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">{item.name}</h5>
                    <p className="mb-4">{item.description}</p>
                    <Link
                      to={`/service/${item._id}`}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Đặt lịch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
