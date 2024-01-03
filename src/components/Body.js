import React from "react"
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer"
import { useSelector } from "react-redux";
import store from "../utils/store";

const Body = ()=>{
    const data = useSelector((store)=>store.app.isMenuOpen)
    return(
        <div className="flex">
              {
                data ?    <Sidebar /> : <></>
            }
          
            <MainContainer />
            
        </div>
    )
}

export default Body;