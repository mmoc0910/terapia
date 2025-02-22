import React from "react";
import { useQueryServiceDetail } from "./modules/useQueryServiceDetail";
import { formatVND } from "../../utils/helpers/formatPrice";
import { toast } from "react-toastify";
import { AppInputText } from "../../elements";
import { useForm } from "react-hook-form";
import { FetchApi } from "../../utils/FetchApi/FetchApi";
import { RadioExperts } from "./items/RadioExperts";

export function ServiceDetail() {
  const { control, handleSubmit } = useForm();
  const { data } = useQueryServiceDetail();
  if (!data) return;

  const booking = async ({
    appointmentTime,
    expertId,
  }: {
    appointmentTime: string;
    expertId: string;
  }) => {
    try {
      console.log("appointmentTime ~ ", appointmentTime, expertId);
      const res = await FetchApi.booking({
        appointmentTime,
        expertId: expertId,
        serviceId: data._id,
      });
      console.log("res ~", res);
      toast.success("Bạn đã đặt lịch thành công!");
    } catch (error) {
      console.logo(error);
      toast.error((error as Error).message);
    }
  };
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
            Service detail
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
            <li className="breadcrumb-item active text-primary">
              Service detail
            </li>
          </ol>
        </div>
      </div>
      <div className="container-fluid appointment py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeInLeft" data-wow-delay="0.2">
              <div className="section-title text-start">
                <h4 className="sub-title pe-3 mb-0">Solutions To Your Pain</h4>
                <h1 className="display-4 mb-4">{data.name}</h1>
                <h2 className="display-6 mb-4">
                  {formatVND(data.price)} - {data.duration} minutes
                </h2>
                {/* <h3 className="mb-4" style={{ fontSize: "24px" }}>
                  Chuyên gia thực hiện: {data.expertId.fullName} -{" "}
                  {data.expertId.email}
                </h3> */}
                <p className="mb-4 display-8">{data.description}</p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4">
                        <h5 className="mb-3">
                          <i className="fa fa-check text-primary me-2"></i> Body
                          Relaxation
                        </h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Et deserunt qui cupiditate veritatis enim
                          ducimus.
                        </p>
                      </div>
                      <div className="mb-4">
                        <h5 className="mb-3">
                          <i className="fa fa-check text-primary me-2"></i> Body
                          Relaxation
                        </h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Et deserunt qui cupiditate veritatis enim
                          ducimus.
                        </p>
                      </div>
                      <form
                        className="text-start mb-4"
                        onSubmit={handleSubmit(booking)}
                      >
                        <RadioExperts
                          experts={data.expertId}
                          control={control}
                          name="expertId"
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                        <AppInputText
                          type="datetime-local"
                          name="appointmentTime"
                          control={control}
                          placeholder={"Chọn thời gian"}
                          rules={{
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }}
                        />
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill text-white py-3 px-5 mt-3"
                        >
                          Booking service
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="video h-100">
                      <img
                        src={data?.imageUrl || "/img/video-img.jpg"}
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
