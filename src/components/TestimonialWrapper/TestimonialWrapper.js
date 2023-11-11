import React, { memo } from "react";
import Testimonial from "../Testimonial/Testimonial";

const TestimonialWrapper = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-[#E5F6FE] py-[60px]">
      <div className="container px-[20px] mx-auto">
        <h1 className="__noto text-[#00A8F6] text-[60px] font-[600] text-center">
          Reviews
        </h1>
        <h1 className=" __noto text-[#2D2929] text-[28px] font-[600] text-center">
          Client Testimonials
        </h1>
        <Testimonial />
      </div>
    </div>
  );
};

export default memo(TestimonialWrapper);
