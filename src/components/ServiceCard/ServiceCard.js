import React from "react";
import "./style.css";


// "#00a8f663"
const ServiceCard = ({ data, index }) => {
  console.log("index ===7", index)
  return (
    <div className="__slider-wrapper cursor-pointer bg-[#fff] rounded-[10px] overflow-hidden">
      <div className="__serivce-image h-[200px] overflow-hidden">
        <img className="object-cover " src={data.img} alt="" />
      </div>
      <div className="text-center  relative pb-[30px] px-[20px]">
        <div
          className={`absolute  flex justify-center items-center z-50 w-[75px] h-[75px] rounded-[10px] translate-y-[-50%] translate-x-[-50%] bg-[${data.opacity}] top-[-50px] bottom-[100%] left-[50%] right-[50%]`}
        >
          <div
            className={`bg-[${data.bg}] rounded-[10px] flex justify-center items-center w-[55px] h-[55px] text-[#fff]`}
          >
            {data.icon}{" "}
          </div>
        </div>
        <h2 className="font-[600] capitalize mb-[10px] mt-[50px] text-[25px] text-[#2D2929] ">
          {data.title}
        </h2>
        <p className="font-[400] text-[18px] text-[#2D2929] leading-[35px] ">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
