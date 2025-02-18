import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export function HomeBanner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          slide 4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          slide 5
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
