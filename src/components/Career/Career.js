import React, { memo } from "react";
import { MdCall } from "react-icons/md";

const Career = ({ CareerData }) => {

  //   const { para, title1, title2, link } = aboutUsData;
  return (
    <div className="max-w-[1600px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2">
      <div className="min-h-[300px] md:min-h-[100vh]">
        <img
          src="/images/5.png"
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    
      <div className="bg-[#056693] pt-[50px] p-[20px] lg:p-[50px] min-h-[100vh]">
        <h3 className="__noto capitalize text-[30px] leading-[22px] font-[800] mb-[40px] text-[#00A8F6]">
          Career
        </h3>
        <h1 className="__noto capitalize text-[#fff] text-[35px] leading-[50px] font-[800] mb-[40px] ">
          Careers Benefits of working at Senior Lifestyle
        </h1>
        <p className="__robot text-[20px] font-[400] text-[#fff]">
          When you choose a career that centers around caring for others, it is
          nice to work for a company that cares for you. Senior Lifestyle offers
          a comprehensive benefits package that enables our employees to care
          for themselves, their families and our residents.
        </p>

        <div className="mt-[30px]">
          <h2 className="text-[22px] font-[700] text-[#ffff]">
            Our Benefits Include:
          </h2>
          <div className="flex justify-between mt-[30px]  ">
            <ul className=" list-disc ml-[20px] lg:ml-0 ">
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Medical insurance
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Dental insurance
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Vision insurance
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Life insurance
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Disability insurance
              </li>
            </ul>

            <ul className="list-disc">
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Vacation and sick days
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Tuition reimbursement
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Employee retirement savings
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Flexible spending accounts
              </li>
              <li className="mb-[5px] text-[18px] font-[400] text-[#fff]">
                Employee assistance program
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Career);
