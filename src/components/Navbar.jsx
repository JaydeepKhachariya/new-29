import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaGlobe, FaUser } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black w-[70px] flex flex-col items-center p-4 justify-around h-[90vh] m-8 rounded-lg absolute">
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

        <NavLink to="about">
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
      <div className="absolute right-[32px] top-[32px] text-[34px]">
        <FaUser />
      </div>
      <div className="absolute right-[32px] bottom-[32px] whitespace-nowrap bg-lime-400 py-3 px-4 rounded-md font-bold text-white">
        <button>BOOK NOW</button>
      </div>
    </>
  );
};

export default Navbar;
