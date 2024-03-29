import React, { memo } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

import { IoMailOutline } from "react-icons/io5";

import { FaHandHoldingMedical, FaUserNurse, FaCarAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { LuBrush } from "react-icons/lu";

const servicesData = [
  {
    icon: <FaHandHoldingMedical className="text-[28px] text-[#dae6eb]" />,
    title:
      "Working for Holistic Residential Home Care is not only rewarding, but it is satisfying.",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700589373/chella/2_qrrp9r.png",
    text: "If someone you know needs a qualified, friendly and caring personal Career to assist them in the comfort of their home, get in touch with us. We provide live in care services across Florida.",
    opacity: "#04557b4b",
    bg: "#04567B",
  },
  {
    icon: <IoMailOutline className="text-[28px] text-[#dae6eb]" />,
    title: "recruitment",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700588643/chella/1_dcw7r1.png",
    text: "Working for Holistic Residential Home Care is not only rewarding, butit is satisfying. We value our staff and provide them with the right tools they need to do their work. Whether its an office job or field job, we are all a family.",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },
  {
    icon: <FaUserNurse className="text-[28px] text-[#dae6eb]" />,
    title: "nursing agency",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700590544/chella/3_uswhk5.jpg",
    text: "Chella is a registered nurse always on site to provide care and assistance for all medical needs.",
    opacity: "#04557b4f",
    bg: "#04567B",
  },
  {
    icon: <HiUserGroup className="text-[28px] text-[#dae6eb]" />,
    title: "mental health",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700673761/chella/4_honeb5.jpg",
    text: "Holistic Residential Home Care provide flexible temporary and permanent staff in healthcare recruitment. From specialist nurse practitioners, to nurses , Our dedicated team work closely with our NHS and private clients",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },

  {
    icon: <FaCarAlt className="text-[28px] text-[#dae6eb]" />,
    title: "Transportation Errands",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700673897/chella/transport_cqvvij.jpg",
    text: "Tailored transportation and errand solutions, delivering seamless convenience for all your needs, ensuring hassle-free and efficient service in need.",
    opacity: "#04557b4f",
    bg: "#04567B",
  },

  {
    icon: <LuBrush className="text-[28px] text-[#dae6eb]" />,
    title: "Domestic Duties",
    img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700594589/chella/domestic_dgoz9b.jpg",
    text: "Our reliable light housekeeping and domestic duty services help maintain your home in tip-top shape, ensuring a clean and comfortable living environment.    ",
    opacity: "#109ec55b",
    bg: "#109FC5",
  },
];

const ServicesWrapper = () => {
  return (
    <div className="max-w-[1660px] mx-auto py-[70px]  bg-[#F7F7F7A3]">
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

export default memo(ServicesWrapper);
