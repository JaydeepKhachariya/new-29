import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import intermediet from "../assets/images/intermediet.png";
import beginner from "../assets/images/beginner.png";
import expert from "../assets/images/expert.png";
import Checkout from "../components/Checkout";
import "animate.css";

const Plan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSelected, setIsSelected] = useState();
  const [showModel, setShowModel] = useState(false);

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

  const plans = [
    {
      id: 1,
      name: "Beginner",
      image: beginner,
      rad: 1,
      dad: 1,
      chingari: 1,
      wabisabi: 1,
      workers: 4,
      mother: 1,
    },
    {
      id: 2,
      name: "Intermediate",
      image: intermediet,
      rad: 1,
      dad: 1,
      chingari: 1,
      wabisabi: 1,
      workers: 8,
      mother: 1,
    },
    {
      id: 3,
      name: "Advance",
      image: expert,
      rad: 1,
      dad: 1,
      chingari: 1,
      wabisabi: 1,
      workers: 16,
      mother: 1,
    },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleClick = (id) => {
    setIsClicked(id);
    setTimeout(() => {
      setIsSelected(id);
    }, 500);
  };
  return (
    <>
      <div className="bgCrousal2 h-[100vh] px-28">
        <div className="h-[100%] top-0 relative">
          {isSelected == undefined ? (
            <div className="flex items-center justify-around  h-[100%]">
              {plans.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="flex flex-col items-center justify-center p-4 h-[250px] w-[250px]"
                    onClick={() => {
                      handleClick(el.id);
                      handlePlanClick(el);
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
                      <div className="flip-card-back">
                        RAD {selectedPlan.rad}$
                      </div>
                    </div>
                  </div>
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="mother.png" alt="" className="w-[130px]" />
                      </div>
                      <div className="flip-card-back">
                        Mother {selectedPlan.mother}$
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-4 flex items-center flex-col justify-between">
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="chingari.png" alt="" className="w-[100px]" />
                      </div>
                      <div className="flip-card-back">
                        Chingari {selectedPlan.chingari}$
                      </div>
                    </div>
                  </div>
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img
                          src={selectedPlan.image}
                          // src={
                          //   isSelected === 1
                          //     ? beginner
                          //     : isSelected === 2
                          //     ? intermediet
                          //     : expert
                          // }
                          alt=""
                          className="w-[100px] animate__animated animate__slideInLeft animate__faster"
                        />
                      </div>
                      <div
                        className="flip-card-back"
                        onClick={() => setIsOpen(true)}
                      >
                        <button>Book now</button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front ">
                        <img src="teamwork2.png" alt="" className="w-[90px]" />
                      </div>
                      <div className="flip-card-back">
                        Workers {selectedPlan.workers}$
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-4 flex items-start flex-col justify-evenly">
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="wabiSabi.png" alt="" className="w-[120px]" />
                      </div>
                      <div className="flip-card-back">
                        Wabisabi {selectedPlan.wabisabi}$
                      </div>
                    </div>
                  </div>
                  <div className="h-[150px] w-[150px] rounded-full bg-transparent flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src="dad.png" alt="" />
                      </div>
                      <div className="flip-card-back">
                        DAD {selectedPlan.dad}$
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 w-3/4 mx-auto flex justify-evenly gap-4 items-center   ">
                {plans.map((el) => {
                  return (
                    <div
                      key={el.id}
                      onClick={() => handlePlanClick(el)}
                      className={`${
                        selectedPlan.id === el.id
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
          )}
        </div>
      </div>
      {/* <div className=""> */}
      {isOpen ? (
        <div className=" bg-white flex flex-col p-4  shadow-xl w-[20%] my-8 mx-2 h-[90vh] rounded-2xl absolute top-0 right-0">
          <div className="flex items-center justify-between w-full">
            <p className="text-[32px]">Cart Items</p>
            <MdClose
              className=" cursor-pointer"
              size={25}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="bg-white cartShadow rounded-xl flex flex-col mt-2 gap-4 p-2">
            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">DAD</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.dad}
                    </p>
                  </div>
                </div>
                <p>1X</p>
              </div>
            </div>

            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">RAD</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.rad}
                    </p>
                  </div>
                </div>

                <p>1X</p>
              </div>
            </div>
            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">Chingari</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.chingari}
                    </p>
                  </div>
                </div>
                <p>1X</p>
              </div>
            </div>
            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">Mother</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.mother}
                    </p>
                  </div>
                </div>
                <p>1X</p>
              </div>
            </div>
            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">Wabisabi</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.wabisabi}
                    </p>
                  </div>
                </div>
                <p>1X</p>
              </div>
            </div>
            <div className="h-[50px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-lg">
              <div className="flex w-full justify-between pr-2 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[16px] text-white uppercase">Workers</p>
                    <p className=" text-gray-200 text-[14px] ">
                      Price : ${selectedPlan.workers}
                    </p>
                  </div>
                </div>
                <p>1X</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* </div> */}
    </>
  );
};

export default Plan;
