import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import intermediet from "../assets/images/intermediet.png";
import beginner from "../assets/images/beginner.png";
import expert from "../assets/images/expert.png";
import Checkout from "../components/Checkout";
import "animate.css";

const Plan = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    <>
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
          )}
        </div>
      </div>
      {/* <div className=""> */}
      {isOpen ? (
        <div className="bg-white flex flex-col p-4  shadow-xl w-[20%] my-8 mx-2 h-[90vh] rounded-2xl absolute top-0 right-0">
          <div className="flex items-center justify-between w-full">
            <p className="text-[32px]">Cart Items</p>
            <MdClose
              className=" cursor-pointer"
              size={25}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="bg-white cartShadow rounded-xl flex flex-col mt-2 gap-4 p-4">
            <div className="h-[70px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-xl">
              <div className="flex gap-2 items-start">
                <div className="flex items-start gap-2"><div className="h-[50px] w-[50px] rounded-md bg-white"></div>
                <div className="flex flex-col items-start">
                  <p className="text-[20px] text-white uppercase">Rad</p>
                  <p className=" text-gray-200 text-[16px] ">Price : $200</p>
                </div></div>
                
                <p>1X</p>
              </div>
            </div>
            <div className="h-[70px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-xl">
              <div className="flex gap-2 items-start">
                <div className="flex items-start gap-2"><div className="h-[50px] w-[50px] rounded-md bg-white"></div>
                <div className="flex flex-col items-start">
                  <p className="text-[20px] text-white uppercase">Rad</p>
                  <p className=" text-gray-200 text-[16px] ">Price : $200</p>
                </div></div>
                
                <p>1X</p>
              </div>
            </div>
            <div className="h-[70px] flex items-center w-full bg-[#60a5fa] py-1 px-2 rounded-xl">
              <div className="flex gap-2 items-start">
                <div className="flex items-start gap-2"><div className="h-[50px] w-[50px] rounded-md bg-white"></div>
                <div className="flex flex-col items-start">
                  <p className="text-[20px] text-white uppercase">Rad</p>
                  <p className=" text-gray-200 text-[16px] ">Price : $200</p>
                </div></div>
                
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
