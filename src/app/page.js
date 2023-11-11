"use client";

import React, { Suspense } from "react";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("@/components/AboutUs/AboutUs"), {
  ssr: false,
});
const Career = dynamic(() => import("@/components/Career/Career"), {
  ssr: false,
});

const Help = dynamic(() => import("@/components/Help/Help"), {
  ssr: false,
});
const GetInTouch = dynamic(() => import("@/components/GetInTouch/GetInTouch"), {
  ssr: false,
});

const Services = dynamic(() => import("@/components/Services/Services"), {
  ssr: false,
});
const TestimonialWrapper = dynamic(
  () => import("@/components/TestimonialWrapper/TestimonialWrapper"),
  {
    ssr: false,
  }
);

const Video = dynamic(() => import("@/components/Video/Video"), {
  ssr: false,
});
const HeaderSlider = dynamic(
  () => import("@/components/sliders/HeaderSlider/HeaderSlider"),
  {
    ssr: false,
  }
);
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "@/components/Welcome/Welcome";
const aboutUsData = {
  title1: " about us",
  title2: " We Take Care of Your Problems Carefully",
  para: `We understand that unexpected situations can arise axt any time, and
  thats why we at holistic residential home care are committed to providing
  our clients with round-the-clock real-time problem resolution. Our
  team of trained professionals is available 24/7 to respond with a
  sense of urgency to any emergency that may occur in the home or
  community potentially impacting our clients. Our goal is to provide
  our clients with the support and resources they need to navigate
  emergency situations with ease and peace of mind.`,
  link: "/about-us",
};

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <NavBar /> */}

      <Suspense fallback={<></>}>
        <div className="__header mb-[70px] overflow-x-hidden">
          <HeaderSlider />
          {/* <div className="curve-wrapper">

          </div> */}
        </div>
      </Suspense>
      <Suspense fallback={<></>}>
        <div className=" lg:hidden">
          <Welcome />
        </div>
      </Suspense>
      <Suspense fallback={<></>}>
        <AboutUs aboutUsData={aboutUsData} />
      </Suspense>
      <Suspense fallback={<></>}>
        <Services />
      </Suspense>
      <Suspense fallback={<></>}>
        <Career />
      </Suspense>

      <Suspense fallback={<></>}>
        <Video />
      </Suspense>

      <Suspense fallback={<></>}>
        <TestimonialWrapper />
      </Suspense>

      <Suspense fallback={<></>}>
        <GetInTouch />
      </Suspense>

      <Suspense fallback={<></>}>
        <Help />
      </Suspense>
    </div>
  );
};

export default page;
