import React from "react";
import "./style.css";
const Banner = ({ data }) => {
  return (
    <div
      style={{
        background: `url(${data.img})`,
        backgroundPositionX: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="__about-wrapper max-w-[1600px] py-[20px] flex-col flex justify-center items-center min-h-[200px] md:h-[400px] mx-auto"
    >
      <h1 className="__noto z-10 text-center px-[20px] capitalize text-[60px] text-[#fff] font-[600]">
        {data.title}
      </h1>
      {data.text && <p className="__robot text-[#fff] px-[20px]  text-center mt-[10px] z-10 text-[25px] font-[500]">{data.text}</p>}
    </div>
  );
};

export default Banner;
