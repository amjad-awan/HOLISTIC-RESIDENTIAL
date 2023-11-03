import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1600px] bg-[#04547C] px-[20px] pt-[100px] pb-[40px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
      <div className="">
        <h3 className="__noto capitalize text-[30px] text-[#fff] leading-[22px] font-[800] mb-[40px] ">
          About Us
        </h3>
        <p className="__robot text-[#fff] font-[400] leading-7 text-[18px]">
          At holistic residential home care, we are firm believers in enhancing
          your quality of life to its fullest potential. Our commitment to
          achieving this is rooted in pioneering approaches, individualized
          attention, and a deep sense of empathy.
        </p>
      </div>
      <div className="">
        <h3 className="__noto capitalize text-[30px] text-[#fff] leading-[22px] font-[800] mb-[40px] ">
          Quick Links
        </h3>

        <div className="flex flex-col ">
          <Link href="/" className="__robot mb-[20px] text-[18px] text-[#fff]">
            Home
          </Link>
          <Link
            href="/about"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            About Us
          </Link>
          <Link
            href="/service"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            Services
          </Link>

          <Link
            href="/contact-us"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="">
        <h3 className="__noto capitalize text-[30px] text-[#fff] leading-[22px] font-[800] mb-[40px] ">
          Contact Us
        </h3>

        <div className="flex flex-col ">
          <p className="__robot mb-[20px] text-[18px] text-[#fff]">
            17281 Orange Grove Blvd Loxahatchee Florida 33470
          </p>
          <a
            href="tel:305-877-3961"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            {" "}
            305-877-3961
          </a>

          <a
            href="mailto:amjadmalikf53@gmail.com"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            Holisticcare14@gmail.com
          </a>
          <p
            href="void(0)"
            className="__robot mb-[20px] text-[18px] text-[#fff]"
          >
            Fax: 1+(561)-225-1854
          </p>
        </div>
      </div>

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.9376790604965!2d-80.32012082456626!3d26.746364776746805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d93180939a83d1%3A0xd0afb7501ea944a0!2s17281%2045th%20Ct%20N%2C%20Loxahatchee%2C%20FL%2033470%2C%20USA!5e0!3m2!1sen!2s!4v1698693112444!5m2!1sen!2s"
          width="300"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-[100%] col-span-4 h-[1px] bg-[#c5c5c5]"></div>
      <p className="text-center col-span-4 text-[#fff] ">
        © Copyright 2023 holistic residential home care | Made By DOVILAS
        ENTERPRISES, LLC
      </p>
    </div>
  );
};

export default Footer;
