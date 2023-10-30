import React from "react";

import { IoIosCall } from "react-icons/io";
const Help = () => {
  return (
    <div className="max-w-[1600px] text-center px-[20px] py-[60px]">
      <div className="max-w-[900px] text-center  mx-auto">
        <h1 className="text-[45px] font-[600] text-[#00A8F6] ">
          IS IT TIME TO GET HELP?
        </h1>

        <p className="__robot text-[20px] text-[#2D2929] mt-[40px] ">
          Learn more about your senior living options and explore the best fit
          for your care needs with this quick 4-5 minute survey.
        </p>

        <div className="__navbar-caller mx-auto max-w-[300px] mt-[70px]  text-center">
          <a
            href="tel:305-877-3961"
            className="__noto  flex capitalize justify-center text-[30px] text-[#fff] px-[10px] items-center rounded-[40px] h-[60px] bg-[#056693]"
          >
            <IoIosCall className="mr-[20px] __noto" /> 305-877-3961
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
