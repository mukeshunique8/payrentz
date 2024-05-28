// Badge.jsx
import React from 'react'

export default function Badge({ text, color, bgColor }) {
  return (
    <div className={`md:px-[4px] p-[2px] md:py-[5px] rounded-[5px] flex justify-center items-center ${bgColor} ${color}`}>
        <p className='font-bold text-[7px] md:text-[14px]'>{text}</p>
    </div>
  )
}
