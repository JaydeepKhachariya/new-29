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
                    } flex flex-col items-center justify-center p-4 rounded-2xl h-[200px] w-[200px]`}
                  >
                    <img src={el.image} alt="wing plan" />
                    <p className="text-[18px] font-bold">{el.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
