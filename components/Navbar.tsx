import React from "react";
import { IoMenuOutline, IoAddOutline } from "react-icons/io5";
import { IoIosSearch, IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full p-6 flex justify-center items-center">
      <div className="flex justify-between max-w-[1475px] w-full gap-20">
        <div className="flex gap-6 items-center w-auto">
          <IoMenuOutline size={25} className="gray-icon cursor-pointer" />
          <h1>Video Player</h1>
        </div>
        <div className="rounded-3xl w-[600px] flex justify-end">
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="O que você está procurando?"
            className="bg-slate-100 rounded-l-3xl px-6 w-full outline-none py-2 text-sm"
          />
          <div className="bg-slate-700 rounded-r-3xl px-4 flex items-center justify-center cursor-pointer">
            <IoIosSearch size={25} className="white-icon mr-1" />
          </div>
        </div>
        <div className="flex gap-6 items-center w-auto">
          <IoAddOutline size={25} className="gray-icon cursor-pointer" />
          <IoMdNotifications size={25} className="gray-icon cursor-pointer" />
          <img
            src="/assets/user.png"
            alt="User Profile"
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
