import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Picture1 from "../assets/images/Picture1.png";

const Explore = () => {
  return (
    <div className="h-[100vh] bgCrousal px-28">
      <div className="h-[85vh] top-24 relative">
        <div className="flex h-[100%] w-[100%] justify-center items-center gap-64">
          <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
          <div className="h-[500px] w-[500px] rounded-full bg-black"></div>
          <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
        </div>
        <div className="absolute flex items-center justify-between p-4 flex-col  h-[100%] w-[100%] z-10 top-0">
          <p className="text-[80px] font-bold text-yellow-500">DAD</p>
          <img src={Picture1} alt="" />
          <div className="flex w-[100%] items-center justify-between">
            <ul>
              <li className="text-center">
                <p className="font-bold text-[22px] text-black">WATTAGE</p>
                <p className="text-[24px] text-black font-light">600W</p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">Temperature</p>
                <p className="text-[24px] text-black font-light">
                  2700K to 6500K
                </p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">CRI</p>
                <p className="text-[24px] text-black font-light">96+</p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">TLCI</p>
                <p className="text-[24px] text-black font-light">97+</p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">Dimming</p>
                <p className="text-[24px] text-black font-light">
                  0-100% Continuous
                </p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">Battery</p>
                <p className="text-[24px] text-black font-light">V-Mount</p>
              </li>
            </ul>
            <ul>
              <li className="text-center">
                {" "}
                <p className="font-bold text-[22px] text-black">
                  Accessory Mount
                </p>
                <p className="text-[24px] text-black font-light">Bowen’s</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
