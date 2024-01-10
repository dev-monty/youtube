import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import store from "../utils/store";

export const Sidebar = ()=>{

    const isMenuShow = useSelector((store)=>store.app.isMenuOpen)

    if(!isMenuShow) return null;

    return(
        <div className="shadow-lg  p-2 m-2">
               <ul>
           <li className="p-1"><Link to="/">🏡 Home</Link></li>
           <li className="p-1">🎥 Live</li>
           <li className="p-1">📺 Video</li>
           <li className="p-1">📚 Learning</li>
           </ul>
            <h1 className="font-bold pt-5">SubScription</h1>
           <ul>
           <li className="p-1">🎻 Music</li>
           <li className="p-1">🏏 Sports</li>
           <li className="p-1">🎮 Gaming</li>
           <li className="p-1">🎬 Movies</li>
           </ul>
           <h1 className="font-bold pt-5">SubScription</h1>
           <ul>
           <li className="p-1">📡 News</li>
           <li className="p-1 whitespace-nowrap">⏱️ Watch Later</li>
           <li className="p-1 whitespace-nowrap">📽 Liked Videos</li>
           <li className="p-1">💹 Treding</li>
           </ul>
        </div>
    )
}

// export default Sidebar;