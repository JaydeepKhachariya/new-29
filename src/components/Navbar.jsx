import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaGlobe, FaUser } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#000] backdrop-blur-lg w-[70px] flex flex-col items-center p-4 justify-around h-auto top-0 bottom-0 m-8 rounded-lg fixed">
        <NavLink to="/">
          <div className="flex items-center justify-center text-[45px] w-[50px] h-[50px]  text-white rounded-md">
            <HiHome />
          </div>
        </NavLink>

        <NavLink to="/explore">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-white rounded-md">
            <FaGlobe />
          </div>
        </NavLink>

        <NavLink to="plans">
          <div className="flex items-center justify-center text-[45px] w-[50px] h-[50px]  text-white rounded-md">
            <MdLocalMovies />
          </div>
        </NavLink>

        <NavLink to="blog">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-white rounded-md">
            <IoBook />
          </div>
        </NavLink>

        <NavLink to="contact">
          <div className="flex items-center justify-center text-[40px] w-[50px] h-[50px]  text-white rounded-md">
            <RiCustomerServiceFill />
          </div>
        </NavLink>
      </nav>
      {/* <p className="ml-[150px] mt-[32px] inline-block">{}</p> */}
      <div className="absolute top-[32px] left-32 text-[34px]">
        <FaUser />
      </div>
      <div className="absolute top-[32px] right-[32px] text-[34px]">
        <img src={Logo} width={150} height={150} alt="" />
      </div>
      <div className=" absolute bottom-[32px] right-[32px]">
        <button className=" whitespace-nowrap bg-lime-400 py-3 px-4 rounded-md font-bold text-white">
          BOOK NOW
        </button>
      </div>
    </>
  );
};

export default Navbar;
