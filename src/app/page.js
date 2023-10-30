"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Career from "@/components/Career/Career";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Help from "@/components/Help/Help";
import Services from "@/components/Services/Services";
import TestimonialWrapper from "@/components/TestimonialWrapper/TestimonialWrapper";
import HeaderSlider from "@/components/sliders/HeaderSlider/HeaderSlider";
import React from "react";

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
    <div className="overflow-hidden">
      {/* <NavBar /> */}

      <div className="__header">
        <HeaderSlider />
      </div>
      <AboutUs aboutUsData={aboutUsData} />
      <Services />
      <Career />
      <TestimonialWrapper />
      <GetInTouch />
      <Help />
    </div>
  );
};

export default page;
