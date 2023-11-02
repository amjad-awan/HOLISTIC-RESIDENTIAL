import React from "react";
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
        className="mySwiper mt-[60px] h-[50vh] "
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
              amjad
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
              Blessed Valley is very timely and thorough. You will never feel
              rushed. You will leave feeling better.
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              amjad
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam
              omnis temporibus voluptas consequuntur deleniti aspernatur, sequi
              expedita magni quaerat exercitationem facilis mollitia, iusto
              soluta, natus voluptate? Mollitia, atque suscipit.
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              amjad
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
              "Blessed Valley is an excellent psychiatric nurse practitioner.
              She is extremely patient and knowledgeable. I am a very
              challenging patient and she has always been there for me 24/7. I
              highly recommend her practice for even the most difficult of
              psychiatric needs."
            </p>
            <p className="text-[#00A8F6] capitalize mt-[50px] text-[22px] font-[500]">
              amjad
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
