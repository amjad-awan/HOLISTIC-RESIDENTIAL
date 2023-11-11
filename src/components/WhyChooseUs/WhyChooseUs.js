import React, { memo } from "react";
import { BsUmbrella, BsSend } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
const WhyChooseUs = () => {
  return (
    <div className="max-w-[1600px] px-[20px] py-[100px] mx-auto  ">
      <div className="">
        <h2 className="__noto text-[#04547C] text-[40px] font-[600] text-center">
          Why Choose Us
        </h2>
      </div>
      <div className="max-w-[1200px]  mx-auto grid mt-[100px] gap-[50px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <div className="bg-[#04547C] mx-auto flex justify-center items-center h-[90px] w-[90px] rounded-[50%]">
            <BsUmbrella className="text-[#ffff] font-[400] text-[40px]" />
          </div>
          <p className="text-[#04547C] my-[20px]  capitalize text-[25px] font-[500]">
            insurance accepted
          </p>

          <p className="__robot text-[#2D2929] text-[18px] font-[500]">
            Discover the variety of insurance plans we are able to accommodate.
          </p>
        </div>
        <div className="bg-[#00A8F6] p-[20px] text-center h-[350px] rounded-[5px]">
          <div className="bg-[#fff] mx-auto flex justify-center items-center h-[90px] w-[90px] rounded-[50%]">
            <IoCalendarOutline className="text-[#2297BC] font-[400] text-[40px]" />
          </div>
          <p className="text-[#fff] my-[20px]  capitalize text-[25px] font-[500]">
            Schedule An Assessment
          </p>

          <p className="__robot text-[#fff] text-[18px] font-[500]">
            Access our complete contact details and initiate the journey to
            securing optimal home care services tailored to your needs or those
            of your cherished family member.{" "}
          </p>
        </div>
        <div className="text-center">
          <div className="bg-[#04547C] mx-auto flex justify-center items-center h-[90px] w-[90px] rounded-[50%]">
            <BsSend className="text-[#ffff] font-[400] text-[40px]" />
          </div>
          <p className="text-[#04547C] my-[20px]  capitalize text-[25px] font-[500]">
            Send Your Refferals{" "}
          </p>

          <p className="__robot text-[#2D2929] text-[18px] font-[500]">
            Tell a friend or a loved one about us and how we can help them.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(WhyChooseUs);
