import Banner from "@/components/Banner/Banner";
import React from "react";
import { IoCallSharp } from "react-icons/io5";

const data = {
  title: "services",
  img: "/images/bg101.jpg",
};
import {GoMail} from "react-icons/go"
import { BiMap } from "react-icons/bi";

const page = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Banner data={data} />

      <div className="container py-[40px]  mx-auto grid  gap-[50px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 flex flex-col justify-center items-center px-[20px] py-[20px] text-center border-[#64C16F26] rounded-[10px]">
          <IoCallSharp className="text-[#04547C] text-center mx-auto font-[400] text-[40px]" />

          <a href="tel:305-877-3961" className="text-[#2D2929] my-[20px]  capitalize text-[25px] font-[500]">
            Phone Number{" "}
          </a>

          <p className="__robot text-[#2D2929] text-[20px] font-[500]">
          305-877-3961
          </p>
        </div>
        <div className="border-2 flex flex-col justify-center items-center bg-[#E5F6FE] px-[20px] py-[20px] text-center border-[#64C16F26] rounded-[10px]">
          <GoMail className="text-[#04547C] text-center mx-auto font-[400] text-[40px]" />

          <a href="mailto:Holisticcare14@gmail.com" className="text-[#2D2929] my-[20px]  capitalize text-[25px] font-[500]">
          Email Address
          </a>

          <p className="__robot text-[#2D2929] text-[20px] font-[500]">
          Holisticcare14@gmail.com
          </p>
        </div>
        <div className="border-2 flex flex-col justify-center items-center px-[20px] py-[20px] text-center border-[#64C16F26] rounded-[10px]">
          <BiMap className="text-[#04547C] text-center mx-auto font-[400] text-[40px]" />

          <p className="text-[#2D2929] my-[20px]  capitalize text-[25px] font-[500]">
            Address 
          </p>

          <p className="__robot text-[#2D2929] text-[20px] font-[500]">
          17281 Orange Grove Blvd Loxahatchee Florida 33470
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[80vh] mt-[30px]">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.9376790604965!2d-80.32012082456626!3d26.746364776746805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d93180939a83d1%3A0xd0afb7501ea944a0!2s17281%2045th%20Ct%20N%2C%20Loxahatchee%2C%20FL%2033470%2C%20USA!5e0!3m2!1sen!2s!4v1698693112444!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
