import React from 'react'
import "./style.css"
const Banner = ({data}) => {
    console.log("data",data)
  return (
    <div style={{background:`url(${data.img})`, backgroundPositionX:"bottom",backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="__about-wrapper max-w-[1600px] flex justify-center items-center h-[200px] md:h-[400px] mx-auto">
 <h1 className="__noto z-10 text-center capitalize text-[60px] text-[#fff] font-[600]">{data.title}</h1>
  </div>
  )
}

export default Banner