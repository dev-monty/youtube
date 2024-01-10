import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { togghleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESSIONS } from "../utils/Constants";
import userContext from "../utils/userContext";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggessions,setSuggessions] = useState([]);
  const[showSuggessions,setShowSuggessions] = useState(false);
  
   useEffect(()=>{

    const timer = setTimeout(()=>getSearchSuggession(),200);

      return ()=>{
        clearTimeout(timer)
      }
   },[searchQuery])

   const getSearchSuggession = async()=>{
    //console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESSIONS + searchQuery);
    const json = await data.json();
    //console.log(json);
    setSuggessions(json[1]);
   }

  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(togghleMenu());
  };

  //const {loggedIn,setUserName} = useContext(userContext);
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          alt="menu"
          onClick={handleMenu}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          alt="logo"
          className="h-12 mx-3"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>
      <div className="col-span-10 m-3 ml-[100px]">
        <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggessions(true)}
          onBlur={()=>setShowSuggessions(false)}
          className="w-2/3 p-[6px] text-[16px] border border-gray-300 rounded-l-full outline-none px-5"
        />
        <button className="border border-gray-300 p-[6px] px-3 text-[16px] text-[#5f5b5b] rounded-r-full">
          🔍
        </button>
        </div>
       {showSuggessions && ( <div className="fixed bg-white p-2 m-2 w-[33rem] shadow-lg rounded-lg">
          <ul>
           {suggessions.map((s)=><li key={s} className=" py-2 px-2 hover:bg-gray-100">  🔍 {s}</li>)}

          </ul>
        </div>)}
      </div>
      <div className="col-span-1 m-[20px]">
        <img
          alt="user"
          className="h-6"
          src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
        />
         
        
       
      </div>
    </div>
  );
};

export default Head;
