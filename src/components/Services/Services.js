import React, { Suspense, memo } from "react";
import dynamic from "next/dynamic";

const ServiceSlider = dynamic(() => import("../ServiceSlider/ServiceSlider"), {
  ssr: false,
});
const Services = () => {
  return (
    <div className="bg-[#E5F6FE] py-[100px]">
      <div className="container px-[20px] mx-auto">
        <h1 className="__noto text-[#00A8F6] text-[60px] font-[600] text-center">
          Services
        </h1>
        <h1 className=" __noto text-[#2D2929] text-[28px] font-[600] text-center">
          Everyone Deserves Our Best Services
        </h1>

        <Suspense fallback={<></>}>
          <ServiceSlider />
        </Suspense>
      </div>
    </div>
  );
};

export default memo(Services);
