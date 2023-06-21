import React, { useState } from "react";

import intermediet from "../assets/images/intermediet.png";
import beginner from "../assets/images/beginner.png";
import expert from "../assets/images/expert.png";
import Checkout from "../components/Checkout";
import "animate.css";

const Plan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const arr = [
    {
      id: 1,
      name: "BEGINNER",
      image: beginner,
    },
    {
      id: 2,
      name: "INTERMEDIATE",
      image: intermediet,
    },
    {
      id: 3,
      name: "ADVANCED",
      image: expert,
    },
  ];

  const [isSelected, setIsSelected] = useState();
  const [showModel, setShowModel] = useState(false);
  console.log(isSelected);

  const handleClick = (id) => {
    setIsClicked(id);
    setTimeout(() => {
      setIsSelected(id);
    }, 500);
  };
  return (
    <div className="bgCrousal2 h-[100vh] px-28">
      <div className="h-[100%] top-0 relative">
        {isSelected == undefined ? (
          <div className="flex items-center justify-around  h-[100%]">
            {arr.map((el) => {
              return (
                <div
                  key={el.id}
                  className="flex flex-col items-center justify-center p-4 h-[250px] w-[250px]"
                  onClick={() => {
                    handleClick(el.id);
                  }}
                >
                  <img
                    src={el.image}
                    alt="wing plan"
                    className={`wingPlan ${
                      isClicked === el.id ? `slide-right${el.id}` : null
                    }`}
                  />
                  <p className="text-[18px] font-bold">{el.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className=" w-3/4 h-[80vh] mx-auto grid grid-cols-3 gap-4">
              <div className="p-4 flex items-end flex-col justify-evenly">
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="rad.png" alt="" />
                    </div>
                    <div className="flip-card-back">2</div>
                  </div>
                </div>
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="mother.png" alt="" className="w-[130px]" />
                    </div>
                    <div className="flip-card-back">2</div>
                  </div>
                </div>
              </div>
              <div className=" p-4 flex items-center flex-col justify-between">
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="chingari.png" alt="" className="w-[100px]" />
                    </div>
                    <div className="flip-card-back">Chingari</div>
                  </div>
                </div>
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={
                          isSelected === 1
                            ? beginner
                            : isSelected === 2
                            ? intermediet
                            : expert
                        }
                        alt=""
                        className="w-[100px] animate__animated animate__slideInLeft animate__faster"
                      />
                    </div>
                    <div className="flip-card-back">
                      <button>Book now</button>
                    </div>
                  </div>
                </div>
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front ">
                      <img src="teamwork2.png" alt="" className="w-[90px]" />
                    </div>
                    <div className="flip-card-back">2</div>
                  </div>
                </div>
              </div>
              <div className=" p-4 flex items-start flex-col justify-evenly">
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="wabiSabi.png" alt="" className="w-[120px]" />
                    </div>
                    <div className="flip-card-back">2</div>
                  </div>
                </div>
                <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="dad.png" alt="" />
                    </div>
                    <div className="flip-card-back">2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 w-3/4 mx-auto flex justify-evenly gap-4 items-center   ">
              {arr.map((el) => {
                return (
                  <div
                    key={el.id}
                    onClick={() => setIsSelected(el.id)}
                    className={`${
                      isSelected === el.id
                        ? " bg-blue-400 text-white"
                        : "bg-[white] shadow-xl"
                    } flex flex-col items-center justify-center p-4 rounded-2xl h-[50px] w-[150px]`}
                  >
                    {/* <img src={el.image} alt="wing plan" /> */}
                    <p className="text-[18px] font-bold">{el.name}</p>
                  </div>
                );
              })}
            </div>
          </>
          // <>
          //   <div className="flex w-[100%] h-[100%]">
          //     <div className="w-[20%] flex flex-col justify-between gap-4 items-center   ">
          //       {arr.map((el) => {
          //         return (
          //           <div
          //             key={el.id}
          //             onClick={() => setIsSelected(el.id)}
          //             className={`${
          //               isSelected === el.id
          //                 ? " bg-blue-400 text-white"
          //                 : "bg-[white] shadow-xl"
          //             } flex flex-col items-center justify-center p-4 rounded-2xl h-[150px] w-[150px]`}
          //           >
          //             <img src={el.image} alt="wing plan" />
          //             <p className="text-[18px] font-bold">{el.name}</p>
          //           </div>
          //         );
          //       })}
          //     </div>
          //     <div className="w-[70%] flex flex-col gap-2 items-center justify-center">
          //       <p className="text-[24px] font-bold">
          //         600x - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         300x - {isSelected === 1 ? 1 : isSelected === 2 ? 2 : 3}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         50p - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         Tube - {isSelected === 1 ? 1 : isSelected === 2 ? 1 : 4}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "Stand set"
          //           : isSelected === 2
          //           ? "Stand set"
          //           : "Stand set"}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "₹ 2750"
          //           : isSelected === 2
          //           ? "₹ 6000"
          //           : "₹ 12,980"}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "Vehicle"
          //           : isSelected === 2
          //           ? "Vehicle"
          //           : "Vehicle"}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "Generator"
          //           : isSelected === 2
          //           ? "Generator"
          //           : "Generator"}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         Workers - {isSelected === 1 ? 2 : isSelected === 2 ? 3 : 6}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "₹ 5700"
          //           : isSelected === 2
          //           ? "₹ 7550"
          //           : "₹ 13100"}
          //       </p>
          //       <p className="text-[24px] font-bold">
          //         {isSelected === 1
          //           ? "₹ 8450"
          //           : isSelected === 2
          //           ? "₹ 13550"
          //           : "₹ 26080"}
          //       </p>
          //       <button
          //         onClick={() => setShowModel(true)}
          //         className=" whitespace-nowrap bg-[#0051b6] py-3 px-4 rounded-md font-bold text-white bookNow"
          //       >
          //         BOOK NOW
          //       </button>
          //     </div>
          //   </div>
          // </>
        )}
      </div>
      <div className="absolute right-0 top-0 h-full">
        <Checkout open={isOpen} />
      </div>
    </div>
  );
};

export default Plan;
