/* eslint-disable no-unused-vars */
import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

function AditionalInformation() {
  return (
    <div className='conatiner bg-[#FAF3EA] w-full mt-10 md:h-[25vh] '>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10">
        <div className="flex gap-4">
          <HiOutlineTrophy className='text-6xl' />
          <div className="flex space-y-2 flex-col">
            <h1 className='text-xl font-semibold'> High Quality</h1>
            <span className='text-gray-500'>crafted from top materials</span>
          </div>
        </div>
        <div className="flex gap-4">
        <MdOutlineVerified  className='text-6xl' />
          <div className="flex space-y-2 flex-col">
            <h1 className='text-xl font-semibold'>Warranty Protection</h1>
            <span className='text-gray-500'>Over 2 years</span>
          </div>
        </div>
        <div className="flex gap-4 md:pt-0 pt-10">
        <FaDollyFlatbed className='text-6xl' />

          <div className="flex space-y-2 flex-col">
            <h1 className='text-xl font-semibold'> Free Shipping</h1>
            <span className='text-gray-500'>Order over 150 $</span>
          </div>
        </div>
        <div className="flex gap-4 lg:pt-0 pt-10">
        <MdSupportAgent  className='text-6xl' />
          <div className="flex space-y-2 flex-col">
            <h1 className='text-xl font-semibold'> 24 / 7 Support</h1>
            <span className='text-gray-500'>Dedicated support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AditionalInformation