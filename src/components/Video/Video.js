import React from "react";

const Video = () => {
  return (
    <div className="max-w-[1600px] sm:h-[300px] lg:h-[80vh] mx-auto">
      <video controls muted className="h-[100%] object-cover w-[100%]">
        <source
          src="/images/IMG_3533.mp4"
          className="object-cover"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
