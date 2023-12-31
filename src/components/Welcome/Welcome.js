import Link from "next/link";
import React, { memo } from "react";

const Welcome = () => {
  return (
    <div className="px-[20px] lg:px-[50px]  lg:ml-auto rounded-md py-[40px] bg-[#fff] sm:w-[100%] lg:w-[600px]">
  
      <div className="flex justify-between mb-[20px] items-center">
      <h3 className="__noto text-[27px] leading-[22px] font-[700] mb-[0px] text-[#00A8F6]">
        Welcome To
      </h3>
     
        {/* <img src="/images/logo2.ico" className="object-cover h-[100px]" alt=""/> */}
      </div>
      <h1 className="__noto capitalize text-[35px] font-[800] mb-[20px]">
        holistic residential home care
      </h1>
      <h3 className="__noto text-[27px] capitalize leading-[22px] font-[700] mb-[20px] text-[#00A8F6]">
find home away from home      </h3>
      <p className="__robot text-[20px] font-[400]">
        The convenience of accessing quality, professional care in your own home
        can be genuinely life changing – helping you to stay healthy and
        independent. At Holistic Residential Home Care, we have professional
        well-trained career who live the culture of care daily.
      </p>

      <Link
        href="/contact-us"
        className="__noto mt-[50px] flex justify-center text-[30px] text-[#fff] px-[30px] items-center rounded-[40px] w-[250px] h-[60px] bg-[#056693]"
      >
        Contact us
      </Link>
    </div>
  );
};

export default memo(Welcome);
