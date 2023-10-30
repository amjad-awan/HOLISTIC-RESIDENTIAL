"use client";
import React, { useState } from "react";

import "./style.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import { MdCall } from "react-icons/md";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  return (
    <div className="bg-[#fff] relative  px-[70px] h-[98px] max-w-[100%]">
      <button onClick={()=>setOpenNavBar(!openNavBar)} className={`sm:flex absolute top-[50%] translate-y-[-50%] translate-x-[-50%] right-[20px] lg:hidden text-[${openNavBar?"#00A8F6":"#2D2929"}]`}>
        <FaBars />
      </button>
      <div className="__navbar-logo absolute left-[20%] lg:left-[10%] top-[50%] translate-y-[-50%] translate-x-[-50%]  w-[200px]">
        <img
          src="/images/logo2.png"
          alt=""
          className="w-[186px] object-contain h-[66px]"
        />
      </div>
      <div className="__navbar-wrapper ml-[17rem] hidden lg:flex md:gap-[30px] lg:gap-[50px] bg-[#fff] justify-between items-center  h-[100%] max-w-[100%]">
        {/* <div className="__navbar-logo  w-[200px]">
        <img src="/images/logo.png" alt="" className="w-[186px] cover h-[66px]" />
      </div> */}
        <ul className="__navbar-links flex  bg-[#fff] justify-between items-center ">
          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/home">home</Link>
          </li>

          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/about">about us</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/services">services</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/contact">contact us</Link>
          </li>
        </ul>
        <div className="__navbar-caller w-[200px]   text-center">
          <a
            href="tel:305-877-3961"
            className="__noto  flex justify-center text-[30px] text-[#fff] px-[30px] items-center rounded-[40px] h-[60px] bg-[#056693]"
          >
            <MdCall /> 305-877-3961
          </a>
        </div>
      </div>


{/* mobile bar */}
      <div className={`__navbar-wrapper border-2 border-[#f5f4f4]  absolute h-[100vh] z-10 top-[97px] transition-all duration-500 ${openNavBar?"right-0":"right-[-100%]"}  w-[80%] lg:hidden md:gap-[30px] lg:gap-[50px] bg-[#fff] justify-between items-center `}>
        <ul className="__navbar-links flex flex-col py-[30px] px-[30px] bg-[#fff] justify-between items-start ">
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/home">home</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/about">about us</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/services">services</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/contact">contact us</Link>
          </li>
        </ul>
        <div className="__navbar-caller px-[30px] w-[100%] mt-[40px]  text-center">
          <a
            href="tel:0302754363"
            className="__noto w-[100%] flex justify-center text-[30px] text-[#fff]  items-center rounded-[40px] h-[60px] bg-[#056693]"
          >
            <MdCall /> 0302754363
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
