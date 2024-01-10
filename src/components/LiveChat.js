import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = ({name,message}) => {
  return (
    <div className='ml-2  border border-gray-300 w-full h-[400px] rounded-lg shadow-lg bg-slate-100'>
       <h1 className='bg-gray-300 p-2 rounded-tr-lg rounded-tl-lg text-center fixed'> LiveChat</h1>
    
       
        <ChatMessage />
     
    </div>
  )
}

export default LiveChat