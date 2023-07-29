import React from "react";
import {BiSearch} from "react-icons/bi"

const Search = () => {
  return (
    // outer container styling
    <div className=" border-[1px] w-full md:w-auto shadow-sm  transition cursor-pointer py-2 hover:shadow-md rounded-full">
      {/* how inside items should look like  */}

      <div className=" flex flex-row justify-between items-center">
        {/* any where div  */}

        <div className="text-sm font-semibold px-6">Anywhere</div>
        {/* any week text  */}
        <div className=" hidden md:block flex-1 text-sm font-semibold px-6 border-x-[1px] text-center">
          {" "}
          Any week
        </div>
        {/* add guest div  */}
        <div className=" flex flex-row gap-3 item-center text-sm text-gray-600 pl-6 pr-2 items-center">
          <div className=" hidden sm:block ">Add Guests</div>
          {/* search icon  */}
          <div className=" rounded-full p-2 bg-rose-500 text-white">
            <BiSearch  size={18}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
