import React from "react";
import { useQueryMyAppointment } from "./modules/useQueryMyAppointment";
import { formatVND } from "../../utils/helpers/formatPrice";
import dayjs from "dayjs";

export default function MyAppointment() {
  const { data } = useQueryMyAppointment();
  console.log('data ~ ', data)
  return (
    <React.Fragment>
      {" "}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            My Appointment
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
              My Appointment
            </li>
          </ol>
        </div>
      </div>
      <div className="container-fluid appointment py-5">
        <div className="container py-5">
          {data ? (
            <>
              {data.map((item) => (
                <div
                  key={item._id}
                  className="shadow-lg p-4"
                  style={{ borderRadius: "12px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <h5 className="display-6">{item?.serviceId?.name}</h5>
                    <h6 className="display-6 mb-4">
                      {formatVND(item?.serviceId?.price || 0)} -{" "}
                      {item?.serviceId?.duration} minutes
                    </h6>
                  </div>
                  <h6 className="" style={{ fontSize: "24px" }}>
                    Thời gian thực hiện:{" "}
                    {dayjs(item?.appointmentTime).format("HH:MM DD/MM/YYYY")}
                  </h6>
                  <h3 className="" style={{ fontSize: "24px" }}>
                    Chuyên gia thực hiện: {item?.expertId?.fullName} -{" "}
                    {item?.expertId?.email}
                  </h3>
                  <h3 className="mb-4" style={{ fontSize: "24px" }}>
                    Trạng thái: {item?.status}
                  </h3>
                </div>
              ))}
            </>
          ) : (
            <h5 style={{ textAlign: "center" }}>Chưa có lịch hẹn nào</h5>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
