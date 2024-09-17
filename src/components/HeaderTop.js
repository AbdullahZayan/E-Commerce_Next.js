import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <BsGithub />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-md[12px]">
            <strong>Free Shipping </strong>
            This week order over - 55Rm
          </div>
          <div className="flex gap-4">
            <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px] ">
              <option value="USD $">USD $</option>
              <option value="RM $">RM $</option>
              <option value="KD $">KD $</option>
            </select>

            <select name="language" id="language" className="text-gray-500 text-[12px] w-[70px]">
              <option value="English">English</option>
              <option value="Malay">Malay</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
