import React from "react";

const Welcome = () => {
  return (
    <div className="px-[50px] py-[30px] bg-[#fff] sm:w-[80%] md:w-[500px]">
      <h3 className="__noto text-[22px] leading-[22px] font-[700] mb-[20px] text-[#00A8F6]">
        Welcome To
      </h3>
      <h1 className="__noto text-[35px] font-[800] mb-[20px]">
        Blessed Vallay Residence
      </h1>
      <p className="__robot text-[20px] font-[400]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <a
        href=""
        className="__noto mt-[70px] flex justify-center text-[30px] text-[#fff] px-[30px] items-center rounded-[40px] w-[200px] h-[60px] bg-[#056693]"
      >
        Contact us
      </a>
    </div>
  );
};

export default Welcome;
