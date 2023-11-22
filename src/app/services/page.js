import React from "react";
import Banner from "@/components/Banner/Banner";
import ServicesWrapper from "@/components/ServicesWrapper/ServicesWrapper";

const data = {
  title: "services",
  img: "https://res.cloudinary.com/drcdjp6s7/image/upload/v1700672808/chella/bg101_fcbaar.jpg",
};
const page = () => {
  return (
    <div className="overflow-hidden">
      <Banner data={data} />
      <ServicesWrapper />
    </div>
  );
};

export default page;
