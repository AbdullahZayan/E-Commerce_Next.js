import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className=" flex w-fit gap-10 mx-auto font-medium py-4 text-blackish ">
          <div className="navbar_link relative cursor-pointer">Home</div>
          <div className="navbar_link relative cursor-pointer">Categories</div>
          <div className="navbar_link relative cursor-pointer">{"Men"}</div>
          <div className="navbar_link relative cursor-pointer">{"Women"}</div>
          <div className="navbar_link relative cursor-pointer">Jewelry</div>
          <div className="navbar_link relative cursor-pointer">Perfume</div>
          <div className="navbar_link relative cursor-pointer">Blog</div>
          <div className="navbar_link relative cursor-pointer">Hot Offers</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
