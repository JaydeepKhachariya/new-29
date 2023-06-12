import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import Picture1 from "../assets/images/Picture1.png";
import Picture2 from "../assets/images/Picture2.png";
import Picture3 from "../assets/images/Picture3.png";
import Picture4 from "../assets/images/Picture4.png";
import Picture5 from "../assets/images/Picture5.png";

const Explore = () => {
  const arr = [
    {
      id: 1,
      title: "DAD",
      image: Picture1,
      opation1Q: "WATTAGE",
      opation1A: "600W",
      opation2Q: "Color Temperature",
      opation2A: "2700K to 6500K",
      opation3Q: "CRI",
      opation3A: "96+",
      opation4Q: "TLCI",
      opation4A: "97+",
      opation5Q: "Dimming",
      opation5A: "0-100% Continuous",
      opation6Q: "Battery",
      opation6A: "V-Mount",
      opation7Q: "Accessory Mount",
      opation7A: "Bowen’s",
    },
    {
      id: 2,
      title: "MOTHER",
      image: Picture2,
      opation1Q: "WATTAGE",
      opation1A: "600W",
      opation2Q: "Color Temperature",
      opation2A: "RGBWW",
      opation3Q: "CRI",
      opation3A: "96+",
      opation4Q: "TLCI",
      opation4A: "91+",
      opation5Q: "Dimming",
      opation5A: "0-100% Continuous",
      opation6Q: "Battery",
      opation6A: "V-Mount",
      opation7Q: "Accessory Mount",
      opation7A: "Bowen’s",
    },
    {
      id: 3,
      title: "RAD",
      image: Picture3,
      opation1Q: "WATTAGE",
      opation1A: "300W",
      opation2Q: "Color Temperature",
      opation2A: "2700K to 6500K",
      opation3Q: "CRI",
      opation3A: "96+",
      opation4Q: "TLCI",
      opation4A: "97+",
      opation5Q: "Dimming",
      opation5A: "0-100% Continuous",
      opation6Q: "Battery",
      opation6A: "V-Mount",
      opation7Q: "Accessory Mount",
      opation7A: "Bowen’s",
    },
    {
      id: 4,
      title: "CHINGARI",
      image: Picture4,
      opation1Q: "WATTAGE",
      opation1A: "30W",
      opation2Q: "Color Temperature",
      opation2A: "RGBWW",
      opation3Q: "CRI",
      opation3A: "96+",
      opation4Q: "TLCI",
      opation4A: "97+",
      opation5Q: "Dimming",
      opation5A: "0-100% Continuous",
      opation6Q: "Battery",
      opation6A: "Internal",
      opation7Q: "Accessory Mount",
      opation7A: "Bowen’s",
    },
    {
      id: 5,
      title: "WABI-SABI",
      image: Picture5,
      opation1Q: "WATTAGE",
      opation1A: "60W",
      opation2Q: "Color Temperature",
      opation2A: "RGBWW",
      opation3Q: "CRI",
      opation3A: "96+",
      opation4Q: "TLCI",
      opation4A: "97+",
      opation5Q: "Dimming",
      opation5A: "0-100% Continuous",
      opation6Q: "Battery",
      opation6A: "Internal",
      opation7Q: "Accessory Mount",
      opation7A: "Bowen’s",
    },
  ];

  return (
    <div className="h-[100vh] bgCrousal px-28">
      {/* <div className="h-[85vh] top-[3rem] relative"> */}
      {/* <div className="flex h-[100%] w-[100%] justify-center items-center gap-64">
          <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
          <div className="h-[500px] w-[500px] rounded-full bg-black"></div>
          <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
        </div> */}
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        scrollbar={{ draggable: true }}
        speed={600}
        slidesPerView={1}
        // effect={"fade"}
        // modules={[EffectFade]}
      >
        {arr.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className=" flex gap-[25px] items-center justify-between p-4 flex-col  h-[690px] w-[100%] ">
                <p className="text-[80px] font-bold text-[#003564]">
                  {el.title}
                </p>
                <img src={el.image} alt="" className="slideImageAnim" />
                <div className="flex w-[100%] items-center justify-between">
                  <ul>
                    <li className="text-center">
                      <p className="font-bold text-[22px] text-black">
                        WATTAGE
                      </p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation1A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">
                        Temperature
                      </p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation2A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">CRI</p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation3A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">TLCI</p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation4A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">
                        Dimming
                      </p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation5A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">
                        Battery
                      </p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation6A}
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li className="text-center">
                      {" "}
                      <p className="font-bold text-[22px] text-black">
                        Accessory Mount
                      </p>
                      <p className="text-[24px] text-gray-600 font-medium">
                        {el.opation7A}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Explore;
