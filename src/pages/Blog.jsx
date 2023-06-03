import React, { useState } from "react";
import wing from "../assets/images/wing.png";
import chopper from "../assets/images/chopper.png";
import paper from "../assets/images/paper.png";

const Blog = () => {
  const arr = [
    {
      id: 1,
      name: "BEGINNER",
      image: paper,
    },
    {
      id: 2,
      name: "INTERMEDIATE",
      image: chopper,
    },
    {
      id: 3,
      name: "ADVANCED",
      image: wing,
    },
  ];

  const [isSelected, setIsSelected] = useState();
  console.log(isSelected);
  return (
    <div className="h-[100vh] px-28">
      <div className="h-[83%] top-[8.5%] relative">
        {isSelected == undefined ? (
          <div className="flex items-center justify-around  h-[100%]">
            {arr.map((el) => {
              return (
                <div
                  key={el.id}
                  className="flex flex-col items-center justify-center p-4 h-[250px] w-[250px]"
                  onClick={() => {
                    setIsSelected(el.id);
                  }}
                >
                  <img src={el.image} alt="wing plan" />
                  <p className="text-[18px] font-bold">{el.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex w-[100%] h-[100%]">
            <div className="w-[20%] flex flex-col justify-between gap-4 items-center   ">
              {arr.map((el) => {
                return (
                  <div
                    key={el.id}
                    onClick={() => setIsSelected(el.id)}
                    className={`${
                      isSelected === el.id ? "bg-red-500" : "bg-yellow-500"
                    } flex flex-col items-center justify-center p-4 rounded-2xl h-[150px] w-[150px]`}
                  >
                    <img src={el.image} alt="wing plan" />
                    <p className="text-[18px] font-bold">{el.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[70%] flex flex-col gap-2 items-center justify-center">
              <p className="text-[24px] font-bold">
                600x - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
              </p>
              <p className="text-[24px] font-bold">
                300x - {isSelected === 1 ? 1 : isSelected === 2 ? 2 : 3}
              </p>
              <p className="text-[24px] font-bold">
                50p - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
              </p>
              <p className="text-[24px] font-bold">
                Tube - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "Stand set"
                  : isSelected === 2
                  ? "Stand set"
                  : "Stand set"}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "₹ 2750"
                  : isSelected === 2
                  ? "₹ 6000"
                  : "₹ 12,980"}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "Vehicle"
                  : isSelected === 2
                  ? "Vehicle"
                  : "Vehicle"}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "Generator"
                  : isSelected === 2
                  ? "Generator"
                  : "Generator"}
              </p>
              <p className="text-[24px] font-bold">
                Workers - {isSelected === 1 ? 2 : isSelected === 2 ? 3 : 6}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "₹ 5700"
                  : isSelected === 2
                  ? "₹ 7550"
                  : "₹ 13100"}
              </p>
              <p className="text-[24px] font-bold">
                {isSelected === 1
                  ? "₹ 8450"
                  : isSelected === 2
                  ? "₹ 13550"
                  : "₹ 26080"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
