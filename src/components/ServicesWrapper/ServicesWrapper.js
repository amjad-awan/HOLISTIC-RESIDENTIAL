import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

import { IoMailOutline } from "react-icons/io5";

import { FaHandHoldingMedical, FaUserNurse, FaCarAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { LuBrush } from "react-icons/lu";

const servicesData = [

  {
    icon: <FaHandHoldingMedical className="text-[28px] text-[#dae6eb]" />,
    title: "supported live-in",
    img: "/images/2.png",
    text: "If someone you know needs a qualified, friendly and caring personal carer to assist them in the comfort of their home, get in touch with us. We provide live in care services across Oxfordshire.",
    opacity: "#04557b4b",
    bg: "#04567B",
  },
  {
    icon: <IoMailOutline className="text-[28px] text-[#dae6eb]" />,
    title: "recruitment",
    img: "/images/1.png",
    text: "Working for holistic residential home care is not only rewarding, butit is satisfying. We value our staff and provide them with the right tools they need to do their work. Whether its an office job or field job, we are all a family.",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },
  {
    icon: <FaUserNurse className="text-[28px] text-[#dae6eb]" />,
    title: "nurcing agency",
    img: "/images/3.png",
    text: "  holistic residential home care provide flexible temporary and permanent staff in healthcare recruitment. From specialist nurse practitioners, to nurses and carers, our dedicated team work closely with our NHS and private clients.",
    opacity: "#04557b4f",
    bg: "#04567B",
  },
  {
    icon: <HiUserGroup className="text-[28px] text-[#dae6eb]" />,
    title: "mental health",
    img: "/images/4.png",
    text: "  holistic residential home care provide flexible temporary and permanent staff in healthcare recruitment. From specialist nurse practitioners, to nurses and carers, our dedicated team work closely with our NHS and private clients.",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },

  {
    icon: <FaCarAlt className="text-[28px] text-[#dae6eb]" />,
    title: "Transportation Errands",
    img: "/images/4.png",
    text: "Tailored transportation and errand solutions, delivering seamless convenience for all your needs, ensuring hassle-free and efficient service in need.",
    opacity: "#04557b4f",
    bg: "#04567B",
  },

  {
    icon: <LuBrush className="text-[28px] text-[#dae6eb]" />,
    title: "Domestic Duties",
    img: "/images/3.png",
    text: "Our reliable light housekeeping and domestic duty services help maintain your home in tip-top shape, ensuring a clean and comfortable living environment.    ",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },
];

const ServicesWrapper = () => {
  return (
    <div className="max-w-[1660px] py-[70px]  bg-[#F7F7F7A3]">
      <div className="container mx-auto sm:px-[30px]">
        <h1 className="__noto text-[#00A8F6] text-[40px] font-[600] text-left">
          Our Services
        </h1>
        <h1 className=" __noto text-[#2D2929] mt-[15px] text-[30px] font-[600] text-left">
          Elderly Care Services We Provide
        </h1>

        <div className="mx-auto grid mt-[40px] gap-[50px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((data, index) => {
            return <ServiceCard data={data} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesWrapper;
