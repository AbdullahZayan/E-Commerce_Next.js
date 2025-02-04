import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-1/2 -translate-x-1/2 max-w-[500px] px-8 sm:px-4">
      <div className="flex justify-between text-[28px] sm:text-[20px] py-2">
        <IoMenuOutline />
        <div className="relative">
          <HiOutlineShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        <AiOutlineHome />
        <div className="relative">
          <FiHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>
        <AiOutlineAppstore />
      </div>
    </div>
  );
};

export default MobNavbar;
