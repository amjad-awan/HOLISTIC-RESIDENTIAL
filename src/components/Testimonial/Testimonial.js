import React, { memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import "./style.css";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { BiSolidStar } from "react-icons/bi";
const Testimonial = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination,Navigation]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="__testimonial-slider mySwiper mx-auto mt-[60px]  "
      >
        <SwiperSlide className="sm:px-[30px] lg:px-[100px] ">
          <div className=" h-[100%] flex-col px-[50px] flex justify-start items-center ">
            <div className="flex mb-[50px] text-[#00A8F6]  w-[150px] mx-auto justify-between items-center">
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
            </div>
            <p className="__robot text-center text-[20px]">
              An amazing medical practitioner with a caring heart. Thank you for
              taking such great care of my Dad and Aunt!
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              David
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sm:px-[30px] lg:px-[100px] ">
          <div className=" h-[100%] flex-col px-[50px] flex justify-start items-center ">
            <div className="flex mb-[50px] text-[#00A8F6]  w-[150px] mx-auto justify-between items-center">
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
            </div>
            <p className="__robot text-center text-[20px]">
            Holistic Residential Home Care is very timely and thorough. You will never feel
              rushed. You will leave feeling better.
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              Stephen
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:px-[30px]  lg:px-[100px]">
          <div className=" h-[100%] flex-col px-[50px] flex justify-start items-center ">
            <div className="flex mb-[50px] text-[#00A8F6]  w-[150px] mx-auto justify-between items-center">
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
            </div>
            <p className="__robot text-center text-[20px]">
            Holistic Residential Home Care is exceptional
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              Miceal
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:px-[30px] lg:px-[100px] ">
          <div className=" px-[50px] h-[100%] flex-col flex justify-start items-center ">
            <div className="flex mb-[50px] text-[#00A8F6]  w-[150px] mx-auto justify-between items-center">
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
              <BiSolidStar className="text-[22px]" />
            </div>
            <p className="__robot text-center text-[20px]">
              Holistic Residential Home Care is an excellent psychiatric nurse practitioner.
              She is extremely patient and knowledgeable.
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              Gorge
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default memo(Testimonial);
