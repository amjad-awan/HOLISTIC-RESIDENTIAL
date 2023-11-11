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
        className="mySwiper h-[120vh]"
      >
        <SwiperSlide className="__slide __first-slide sm:px-[30px] lg:px-[100px] flex justify-end items-center">
          <Welcome />
        </SwiperSlide>
        <SwiperSlide className="__slide __sec-slide sm:px-[30px] lg:px-[100px] flex justify-end items-center">
          <Welcome />
        </SwiperSlide>
        <SwiperSlide className="__slide __third-slide sm:px-[30px] lg:px-[100px] flex justify-end items-center">
          <Welcome />
        </SwiperSlide>{" "}
      </Swiper>
    </>
  );
};

export default memo(HeaderSlider);
