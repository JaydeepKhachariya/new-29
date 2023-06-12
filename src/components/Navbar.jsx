import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaGlobe, FaUser } from "react-icons/fa";
import { RiUser4Line } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiCameraMovie, BiWallet, BiUser } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[white] shadow-lg  w-[70px] flex flex-col items-center p-4 justify-around h-auto top-0 bottom-0 m-8 rounded-md fixed">
        <NavLink to="/">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <FiHome />
          </div>
        </NavLink>

        <NavLink to="/explore">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <IoSearch />
          </div>
        </NavLink>

        <NavLink to="/bookings">
          <div className="flex items-center justify-center text-[38px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <BiCameraMovie />
          </div>
        </NavLink>

        <NavLink to="/plan">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <BiWallet />
          </div>
        </NavLink>

        <NavLink to="/blog">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <HiOutlineBookOpen />
          </div>
        </NavLink>

        <NavLink to="/contact">
          <div className="flex items-center justify-center text-[35px] w-[50px] h-[50px]  text-[#3a3b3d] rounded-md">
            <RiUser4Line />
          </div>
        </NavLink>
      </nav>
      {/* <p className="ml-[150px] mt-[32px] inline-block">{}</p> */}
      {/* <div className="absolute top-[32px] left-32 text-[34px]">
        <FaUser />
      </div> */}
      {/* <div className="absolute top-[32px] right-[32px] text-[34px]">
        <img src={Logo} width={150} height={150} alt="" />
      </div> */}
    </>
  );
};

export default Navbar;
