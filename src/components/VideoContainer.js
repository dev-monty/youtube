import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Constants';
import VideoCard,{AdWithVideo} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos,setVideos] = useState([]);
 

  useEffect(()=>{
   getVideos();
  },[]);

 const getVideos =async ()=>{
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  //console.log(json.items);
  setVideos(json.items);
 }

 if(videos.length === 0) return <h1>Loading</h1>

  return (
    <div className='flex flex-wrap'>
      {/* {videos[0] && <AdWithVideo videoinfo={videos[0]}/> } */}
      {
        videos.map((video)=>{
          return <Link key={video.id} to={"/watch?v="+video.id} className='basis-[30.333333%] p-2 m-2 '><VideoCard   videoinfo={video}/></Link>
        })
      }
    
    </div>
  )
}

export default VideoContainer