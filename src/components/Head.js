import React from "react";
import { useDispatch } from "react-redux";
import { togghleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();
  const handleMenu = ()=>{
    dispatch(togghleMenu())
  }

  

  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          alt="menu"
        onClick={handleMenu} className="h-8" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          alt="logo"
          className="h-12 mx-3" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10 m-3 ml-[100px]">       
        <input type="text" placeholder="Search..." className="w-2/3 p-[6px] text-[16px] border border-gray-300 rounded-l-full outline-none"/>
        <button className="border border-gray-300 p-[6px] px-3 text-[16px] text-[#5f5b5b] rounded-r-full">🔍</button>
      </div>
      <div className="col-span-1 m-[20px]">
        <img alt="user" className="h-6" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" />
      </div>
    </div>
  );
};

export default Head;
