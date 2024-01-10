import React from 'react'
import Button from './Button'

const List=["All","Live","Cricker","News","Cooking","Cricket","JavaScript","Devops","SQL","WordPress","Accounting"]

const ButtonList = () => {
  
  return (
    <div className='flex'>
   {
    List.map((name,index)=>{
      return <Button key={index} name={name} />
    })
   }
    </div>
  )
}

export default ButtonList