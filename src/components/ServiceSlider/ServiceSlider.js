import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMailOutline } from "react-icons/io5";

import { FaHandHoldingMedical, FaUserNurse } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceSlider = () => {
  const sliderData = [
    {
      icon: <IoMailOutline className="text-[28px] text-[#dae6eb]" />,
      title: "recruitment",
      img: "/images/1.png",
      text: "Working for Holistic Residential Home Care is not only rewarding, butit is satisfying. We value our staff and provide them with the right tools they need to do their work. Whether its an office job or field job, we are all a family.",
      opacity: "#109ec55b",
      bg: "#109FC5",
    },
    {
      icon: <FaHandHoldingMedical className="text-[28px] text-[#dae6eb]" />,
      title: "Working for Holistic Residential Home Care is not only rewarding, but it is satisfying.",
      img: "/images/2.png",
      text: "If someone you know needs a qualified, friendly and caring personal Career to assist them in the comfort of their home, get in touch with us. We provide live in care services across Florida.",
      opacity: "#04557b4b",
      bg: "#04567B",
    },
    {
      icon: <FaUserNurse className="text-[28px] text-[#dae6eb]" />,
      title: "nursing agency",
      img: "/images/3.png",
      text: "holistic residential home care provide flexible temporary and permanent staff in healthcare recruitment. From specialist nurse practitioners, to nurses and Careers, our dedicated team work closely",
      opacity: "#04557b4f",
      bg: "#04567B",
    },
    {
      icon: <HiUserGroup className="text-[28px] text-[#dae6eb]" />,
      title: "mental health",
      img: "/images/4.png",
      text: "  holistic residential home care provide flexible temporary and permanent staff in healthcare recruitment. From specialist nurse practitioners, to nurses and Careers, our dedicated team work closely with our NHS and private clients.",
      opacity: "#109ec55b",
      bg: "#109FC5",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-[100px]"
      >
        {sliderData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <ServiceCard data={data} index={index} />
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide className="__slider-wrapper cursor-pointer bg-[#fff] rounded-[10px] overflow-hidden">
          <div className="__serivce-image h-[200px] overflow-hidden">
            <img className="object-cover " src="/images/2.png" alt="" />
          </div>
          <div className="text-center relative pb-[30px] px-[20px]">
            <div className="absolute  flex justify-center items-center z-50 w-[75px] h-[75px] rounded-[10px] translate-y-[-50%] translate-x-[-50%] bg-[#04557b4b] top-[-50px] bottom-[100%] left-[50%] right-[50%]">
              <div className="bg-[#04567B] rounded-[10px] flex justify-center items-center w-[55px] h-[55px] text-[#fff]">
                <FaHandHoldingMedical className="text-[28px] text-[#dae6eb]" />
              </div>
            </div>
            <h2 className="font-[600] capitalize mb-[10px] mt-[50px] text-[25px] text-[#2D2929] ">
              supported live-in
            </h2>
            <p className="font-[400] text-[18px] text-[#2D2929] leading-[35px] ">
              If someone you know needs a qualified, friendly and caring
              personal Career to assist them in the comfort of their home, get in
              touch with us. We provide live in care services across
              Oxfordshire.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="__slider-wrapper cursor-pointer bg-[#fff] rounded-[10px] overflow-hidden">
          <div className="__serivce-image h-[200px] overflow-hidden">
            <img className="object-cover " src="/images/3.png" alt="" />
          </div>
          <div className="text-center relative pb-[30px] px-[20px]">
            <div className="absolute  flex justify-center items-center z-50 w-[75px] h-[75px] rounded-[10px] translate-y-[-50%] translate-x-[-50%] bg-[#04557b4f] top-[-50px] bottom-[100%] left-[50%] right-[50%]">
              <div className="bg-[#04567B] rounded-[10px] flex justify-center items-center w-[55px] h-[55px] text-[#fff]">
                <FaUserNurse className="text-[28px] text-[#dae6eb]" />
              </div>
            </div>
            <h2 className="font-[600] capitalize mb-[10px] mt-[50px] text-[25px] text-[#2D2929] ">
              nursing agency
            </h2>
            <p className="font-[400] text-[18px] text-[#2D2929] leading-[35px] ">
              holistic residential home care provide flexible temporary and
              permanent staff in healthcare recruitment. From specialist nurse
              practitioners, to nurses and Careers, our dedicated team work
              closely with our NHS and private clients.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="__slider-wrapper cursor-pointer bg-[#fff] rounded-[10px] overflow-hidden">
          <div className="__serivce-image h-[200px] overflow-hidden">
            <img className="object-cover " src="/images/4.png" alt="" />
          </div>
          <div className="text-center relative pb-[30px] px-[20px]">
            <div className="absolute  flex justify-center items-center z-50 w-[75px] h-[75px] rounded-[10px] translate-y-[-50%] translate-x-[-50%] bg-[#109ec55b] top-[-50px] bottom-[100%] left-[50%] right-[50%]">
              <div className="bg-[#109FC5] rounded-[10px] flex justify-center items-center w-[55px] h-[55px] text-[#fff]">
                <HiUserGroup className="text-[28px] text-[#dae6eb]" />
              </div>
            </div>
            <h2 className="font-[600] capitalize mb-[10px] mt-[50px] text-[25px] text-[#2D2929] ">
              mental health
            </h2>
            <p className="font-[400] text-[18px] text-[#2D2929] leading-[35px] ">
              holistic residential home care provide flexible temporary and
              permanent staff in healthcare recruitment. From specialist nurse
              practitioners, to nurses and Careers, our dedicated team work
              closely with our NHS and private clients.
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ServiceSlider;
