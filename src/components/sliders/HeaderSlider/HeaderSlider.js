import React, { memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
// import required modules
import { Navigation } from "swiper/modules";
import Welcome from "@/components/Welcome/Welcome";

const HeaderSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper flex justify-end items-center overflow-hidden h-[300px] lg:h-[110vh]"
      >
        <SwiperSlide className="__slide  __first-slide  flex justify-end items-center">
          <div className="hidden lg:block mt-[70px]  pr-[50px]">
            <Welcome />
          </div>
        </SwiperSlide>
        <SwiperSlide className="__slide __sec-slide  flex justify-end items-center">
          <div className="hidden lg:block mt-[70px]  pr-[50px]">
            <Welcome />
          </div>
        </SwiperSlide>
        <SwiperSlide className="__slide __third-slide  flex justify-end items-center">
          <div className="hidden lg:block mt-[70px] pr-[50px]">
            <Welcome />
          </div>
        </SwiperSlide>{" "}
      </Swiper>
    </>
  );
};

export default HeaderSlider;
