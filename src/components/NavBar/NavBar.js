"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./style.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import { MdCall } from "react-icons/md";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  console.log(openNavBar);
  return (
    <div className="bg-[#fff] relative overflow-hidden  px-[70px] h-[98px] max-w-[100%]">
      <button
        onClick={() => setOpenNavBar(!openNavBar)}
        className={`sm:flex absolute top-[50%] translate-y-[-50%] translate-x-[-50%] right-[20px] lg:hidden text-[${
          openNavBar ? "#00A8F6" : "#2D2929"
        }]`}
      >
        <FaBars />
      </button>
      <div className="__navbar-logo absolute left-[20%] lg:left-[10%] top-[50%] translate-y-[-50%] translate-x-[-50%]  w-[200px]">
        <img
          src="/images/logo2.png"
          alt=""
          className="w-[186px] object-contain h-[100px]"
        />
      </div>
      <div className="__navbar-wrapper ml-[17rem] hidden lg:flex md:gap-[30px] lg:gap-[50px] bg-[#fff] justify-between items-center  h-[100%] max-w-[100%]">
        {/* <div className="__navbar-logo  w-[200px]">
        <img src="/images/logo.png" alt="" className="w-[186px] cover h-[66px]" />
      </div> */}
        <ul className="__navbar-links flex  bg-[#fff] justify-between items-center ">
          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/">home</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/services">services</Link>
          </li>

          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/about">about us</Link>
          </li>

          <li className="__noto text-[22px] capitalize font-[500]   text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/contact-us">contact us</Link>
          </li>
        </ul>
        <div className="__navbar-caller w-[300px]   text-center">
          <a
            href="tel:305-877-3961"
            className="__noto  flex justify-center text-[30px] text-[#fff] px-[30px] items-center rounded-[40px] h-[60px] w-[100%] bg-[#056693]"
          >
            <MdCall className="mr-2" /> 305-877-3961
          </a>
        </div>
      </div>

      <Transition.Root show={openNavBar} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpenNavBar}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll overflow-x-hidden bg-white pb-6 shadow-xl">
                      {/* <div className="px-4 sm:px-6 py-6 border-b-[1px] border-[#5c5c5c3b]">
                        <div className="flex items-start justify-between"> */}
                      <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          onClick={() => setOpenNavBar(false)}
                          type="button"
                          class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <span class="absolute -inset-2.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <span class="absolute -inset-2.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* </div>
                      </div> */}
                      <div className="relative mt-6 flex flex-col flex-1 px-4 sm:px-6 overflow-y-auto overflow-x-hidden ">
                        {/* mobile bar */}
                        {/* <div
                          style={{ zIndex: "9999" }}
                          className={`__navbar-wrapper border-2 border-[#f5f4f4]  absolute h-[100vh] top-[97px] transition-all duration-500 ${
                            openNavBar ? "right-0" : "right-[-100%]"
                          }  w-[80%] lg:hidden md:gap-[30px] lg:gap-[50px] bg-[#fff] justify-between items-center `}
                        > */}
                        <ul className="__navbar-links flex flex-col py-[30px] px-[30px] bg-[#fff] justify-between items-start ">
                          <li className="__noto text-[22px]  capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
                            <Link href="/" className="w-[100%] block  ">
                              home
                            </Link>
                          </li>
                          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
                            <Link href="/services" className="w-[100%] block  ">
                              services
                            </Link>
                          </li>
                          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
                            <Link href="/about" className="w-[100%] block  ">
                              about us
                            </Link>
                          </li>

                          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
                            <Link
                              href="/contact-us"
                              className="w-[100%] block  "
                            >
                              contact us
                            </Link>
                          </li>
                        </ul>
                        <div className="__navbar-caller px-[30px] w-[100%] mt-[100px]  text-center">
                          <a
                            href="tel:0302754363"
                            className="__noto w-[100%] flex justify-center text-[30px] text-[#fff]  items-center rounded-[40px] h-[60px] bg-[#056693]"
                          >
                            <MdCall /> 0302754363
                          </a>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* mobile bar */}
      {/* <div style={{zIndex: "9999"}} className={`__navbar-wrapper border-2 border-[#f5f4f4]  absolute h-[100vh] top-[97px] transition-all duration-500 ${openNavBar?"right-0":"right-[-100%]"}  w-[80%] lg:hidden md:gap-[30px] lg:gap-[50px] bg-[#fff] justify-between items-center `}>
        <ul className="__navbar-links flex flex-col py-[30px] px-[30px] bg-[#fff] justify-between items-start ">
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/">home</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/about">about us</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/services">services</Link>
          </li>
          <li className="__noto text-[22px] capitalize font-[500] border-b-2 border-[#f5f4f4] w-[100%] py-[15px]  text-[#2D2929] md:px-[30px] lg:px-[40px]">
            <Link href="/contact-us">contact us</Link>
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
      </div> */}
    </div>
  );
};

export default NavBar;
