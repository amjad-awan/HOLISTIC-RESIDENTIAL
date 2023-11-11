import React, { memo } from "react";
import { MdCall } from "react-icons/md";

const AboutUs = ({ aboutUsData }) => {
  const { para, title1, title2, link } = aboutUsData;
  return (

     

      <div className="container px-[20px] py-[70px] lg:py-[100px] mx-auto grid gap-[50px] sm:grid-cols-1 lg:grid-cols-2">
        
        <div>
          <img
            src="/images/5.png"
            alt=""
            className="w-[100%] h-[90%] object-cover"
          />
        </div>
        <div>
          <h3 className="__noto capitalize text-[25px] leading-[22px] font-[700] mb-[40px] text-[#00A8F6]">
            {title1}
          </h3>
          <h1 className="__noto capitalize text-[#2D2929] text-[35px] leading-[50px] font-[800] mb-[40px] ">
            {title2}
          </h1>
          <p className="__robot text-[20px] font-[400] text-[#2D2929]">
            {para}
          </p>

          <div className="__navbar-caller w-[200px] mt-[70px]  text-center">
            <a
              href={link}
              className="__noto  flex capitalize justify-center text-[30px] text-[#fff] px-[10px] items-center rounded-[40px] h-[60px] bg-[#056693]"
            >
              learn more
            </a>
          </div>
        
        </div>
      </div>
 
  );
};

export default memo(AboutUs);
