"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avator from "../Avator";
import MenuItems from "./MenuItems";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className=" relative">
      <div className=" flex flex-row items-center gap-3">
        {/* airbnb home text  */}
        <div
          onClick={() => {}}
          className=" hidden md:block rounded-full py-3 px-4 hover:bg-neutral-100 transition cursor-pointer text-sm font-semibold"
        >
          {" "}
          Airbnb your home
        </div>

        {/* menu  */}
        <div
          className=" flex flex-row items-center gap-3 rounded-full cursor-pointer  hover:shadow-md p-4 md:px-2 md:py-1 border-[1px] transition border-neutral-200"
          onClick={toggleIsOpen}
        >
          <AiOutlineMenu />
          {/* avator icon  */}
          <div className=" hidden md:block">
            <Avator />
          </div>
        </div>
      </div>
      {/* user menu drop  */}
      {isOpen && (
        <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12  text-sm">
          <div className=" flex flex-col  cursor-pointer">
            <>
              {/* menu items  */}
              <MenuItems
              onclick={()=>{}}
              label="Login"
              />
              <MenuItems
              onclick={()=>{}}
              label="Sign up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
