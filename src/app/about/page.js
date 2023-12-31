
"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import TestimonialWrapper from "@/components/TestimonialWrapper/TestimonialWrapper";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
// import TestimonialWrapper from "../../components/TestimonialWrapper/TestimonialWrapper";
import React from "react";

const data = {
  title: "about us",
  img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700672810/chella/banner1_pryenv.jpg",
};

const aboutUsData = {
  title1: " Who we are",
  title2: "Holistic Residential Home Care",
  para: `The Geriatric Psychiatry Outpatient Services provide comprehensive services for adults ages 65 and older with depression, anxiety, and cognitive function disorders. Our array of outpatient programs offer individual and group therapy, incorporating diagnostic evaluation, medication management, and more, for patients who do not require hospitalization.`,
  link: "/about-us",
};
const page = () => {
  return (
    <div className="">
      <Banner data={data} />
      <AboutUs aboutUsData={aboutUsData} />
      <TestimonialWrapper />
      <WhyChooseUs/>
    </div>
  );
};

export default page;
