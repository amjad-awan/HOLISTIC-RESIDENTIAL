import React, { memo, useState } from "react";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setidLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setidLoading(true);
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setidLoading(false);
      toast.success("Submit Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("An error occurred:", error);
      setidLoading(false);
      toast.error("Something Went Wronge", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  return (
    <>
      {/* Same as */}

      <div className="max-w-[1600px] bg-[#04547C] py-[80px]  mx-auto grid sm:grid-cols-1 md:grid-cols-2">
        <div className="h-[300px] mb-[30px] lg:md-0 lg:h-[800px] ">
          <img
            src="https://res.cloudinary.com/drcdjp6s7/image/upload/v1700675954/chella/get-touch-removebg-preview_qf0zal.png"
            alt=""
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="px-[20px] lg:px-[50px] pt-[50px] sm:h-[800px] lg:h-[800px]">
          <h3 className="__noto capitalize text-[30px] text-[#fff] leading-[22px] font-[800] mb-[40px] ">
            Get In Touch!
          </h3>
          <h1 className="__noto capitalize text-[#fff] text-[35px] leading-[40px] font-[800] mb-[40px] ">
            Ask how we can <span className="text-[#00A8F6]">help you:</span>
          </h1>
          <form className="mt-[30px]" onSubmit={handleSubmit}>
            <div className="w-[100%] mb-6">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                className="w-[100%] py-[18px] px-[20px] rounded-[30px] "
              />
            </div>
            <div className="w-[100%] mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                name="email"
                className="w-[100%] py-[18px] px-[20px] rounded-[30px] "
              />
            </div>
            <div className="w-[100%] h-[180px] mb-6">
              <textarea
                placeholder="Enter your message ..."
                value={formData.message}
                name="message"
                onChange={(e) => handleChange(e)}
                className="w-[100%] h-[100%] p-[20px]  rounded-[30px] "
              ></textarea>
            </div>
            <button
              disabled={
                isLoading ||
                !formData.name ||
                !formData.email ||
                !formData.message
              }
              type="submit"
              className={`bg-[#00A8F6]  ${
                isLoading ||
                !formData.name ||
                !formData.email ||
                !formData.message
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } transition-all duration-500 text-[25px] rounded-[40px] text-[#fff] py-[15px] px-[60px]`}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(GetInTouch);
