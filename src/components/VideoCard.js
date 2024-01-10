import React from 'react'

const VideoCard = ({videoinfo}) => {
  //console.log(videoinfo);
  const {snippet,statistics} = videoinfo;
  const {thumbnails}  = snippet;

  return (
    <div >
        <img className='rounded-lg' src={thumbnails.medium.url} alt='img' />
        <h2 className='font-bold px-2 py-1 text-[14px]'>{snippet.title}</h2>
        <h3 className='text-[#606060] px-2 py-1 text-[14px]'>{snippet.channelTitle}</h3>
        <h3 className='text-[#606060] px-2 py-1 text-[14px]'>👁 {statistics.viewCount} Views ⋅ 👍🏻 {statistics.likeCount}</h3>

    </div>
  )
}

//HOC
// export const AdWithVideo = ({videoinfo})=>{
//   return(
//     <div className='border border-red-900'>
//     <VideoCard videoinfo={videoinfo}/>
//     </div>
//   )
// }


export default VideoCard