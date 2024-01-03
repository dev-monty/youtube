import React from "react"

const Sidebar = ()=>{
    return(
        <div className="shadow-lg w-48 p-2 m-2">
               <ul>
           <li className="p-1">🏡 Home</li>
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
           <li className="p-1">⏱️ Watch Later</li>
           <li className="p-1">📽 Liked Videos</li>
           <li className="p-1">💹 Treding</li>
           </ul>
        </div>
    )
}

export default Sidebar;