import React from "react";
import Banner from "@/components/Banner/Banner";
import ServicesWrapper from "@/components/ServicesWrapper/ServicesWrapper";

const data = {
  title: "services",
  img: "/images/bg101.jpg",
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
