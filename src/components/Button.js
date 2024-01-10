import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 rounded-[8px] px-[10px] py-[4px] m-3 font-semibold text-sm'>{name}</button>
    </div>
  )
}

export default Button