import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
// import TestimonialWrapper from "../../components/TestimonialWrapper/TestimonialWrapper";
import React from "react";

const data = {
  title: "about us",
  img: "/images/banner1.jpg",
};

const aboutUsData = {
  title1: " Who we are",
  title2: " holistic residential home care",
  para: `The Geriatric Psychiatry Outpatient Services provide comprehensive services for adults ages 65 and older with depression, anxiety, and cognitive function disorders. Our array of outpatient programs offer individual and group therapy, incorporating diagnostic evaluation, medication management, and more, for patients who do not require hospitalization.`,
  link: "/about-us",
};
const page = () => {
  return (
    <div>
      <Banner data={data} />
      <AboutUs aboutUsData={aboutUsData} />
      {/* <TestimonialWrapper /> */}
      <WhyChooseUs/>
    </div>
  );
};

export default page;
