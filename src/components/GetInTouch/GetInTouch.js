import React from "react";

const GetInTouch = () => {
  return (
    <div className="max-w-[1600px] bg-[#04547C] py-[100px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2">
      <div className="h-[500px]">
        <img
          src="/images/get-touch.png"
          alt=""
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="p-[50px] min-h-[100vh]">
        <h3 className="__noto capitalize text-[30px] text-[#fff] leading-[22px] font-[800] mb-[40px] ">
          Get In Touch!
        </h3>
        <h1 className="__noto capitalize text-[#fff] text-[35px] leading-[40px] font-[800] mb-[40px] ">
          Ask how we can <span className="text-[#00A8F6]">help you:</span>
        </h1>
        <form className="mt-[30px]">
          <div className="w-[100%] mb-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-[100%] py-[18px] px-[20px] rounded-[30px] "
            />
          </div>
          <div className="w-[100%] mb-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-[100%] py-[18px] px-[20px] rounded-[30px] "
            />
          </div>
          <div className="w-[100%] h-[180px] mb-6">
            <textarea
              type="text"
              placeholder="Enter your name"
              className="w-[100%] h-[100%] p-[20px]  rounded-[30px] "
            ></textarea>
          </div>
          <button className="bg-[#00A8F6] text-[25px] rounded-[40px] text-[#fff] py-[15px] px-[60px]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
