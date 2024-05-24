// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { RiEqualizerLine } from "react-icons/ri";
// import { PiCirclesFourBold } from "react-icons/pi";
// import { BsViewList } from "react-icons/bs";
// import { PiLineVerticalThin } from "react-icons/pi";

// function FilterForShopping() {
//     return (
//         <div className='conatiner md:flex items-center justify-between bg-[#F9F1E7] bg-cover w-full space-y-4 py-2 md:[10vh]'>
//             {/* <div className="flex text-center items-center h-auto justify-around"> */}
//             <div className="flex gap-5 items-center">
//                 <div className="flex items-center gap-3 md:gap-5">
//                     <span>
//                         <RiEqualizerLine />
//                     </span>
//                     <span>Filter</span>
//                     <span>
//                         <PiCirclesFourBold />
//                     </span>
//                     <span>
//                         <BsViewList />
//                     </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <span>
//                         <PiLineVerticalThin />
//                     </span>
//                     <span className='md:text-sm text-xs'>
//                         Showing 1-16 of 32 results
//                     </span>
//                 </div>
//             </div>
//             <div className="flex text-xs  gap-5 items-center">
//                 <div className="flex space-x-2 items-center">
//                     <span className='gap-2'>
//                         Show
//                     </span>
//                     <span>
//                         <input type="number" name="" id="" defaultValue={16} className='w-12 text-center p-1 ' />
//                     </span>
//                 </div>
//                 <div className="flex text-xs items-center space-x-3">
//                     <span>Short by</span>
//                     <select name="" id="" className='md:px-4 py-2'>
//                         <option >Default</option>
//                         <option >Recent</option>
//                         <option >MostViewed</option>
//                         <option >Randomely</option>
//                     </select>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default FilterForShopping

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { RiEqualizerLine } from "react-icons/ri"
import { PiCirclesFourBold } from "react-icons/pi"
import { BsViewList } from "react-icons/bs"
import { PiLineVerticalThin } from "react-icons/pi"
import RelatedTab from './RelatedTab' // Import the RelatedTab component

function FilterForShopping() {
    const [showRelatedTab, setShowRelatedTab] = useState(false)

    const toggleRelatedTab = () => {
        setShowRelatedTab(prevState => !prevState)
    }

    return (
        <>
            <div className='conatiner md:flex items-center justify-between bg-[#F9F1E7] bg-cover w-full space-y-4 py-2 md:[10vh]'>
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-3 md:gap-5">
                        <span onClick={toggleRelatedTab} className="cursor-pointer">
                            <RiEqualizerLine />
                        </span>
                        <span>Filter</span>
                        <span>
                            <PiCirclesFourBold />
                        </span>
                        <span>
                            <BsViewList />
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>
                            <PiLineVerticalThin />
                        </span>
                        <span className='md:text-sm text-xs'>
                            Showing 1-16 of 32 results
                        </span>
                    </div>
                </div>
                <div className="flex text-xs  gap-5 items-center">
                    <div className="flex space-x-2 items-center">
                        <span className='gap-2'>
                            Show
                        </span>
                        <span>
                            <input type="number" name="" id="" defaultValue={16} className='w-12 text-center p-1 ' />
                        </span>
                    </div>
                    <div className="flex text-xs items-center space-x-3">
                        <span>Short by</span>
                        <select name="" id="" className='md:px-4 py-2'>
                            <option>Default</option>
                            <option>Recent</option>
                            <option>MostViewed</option>
                            <option>Randomely</option>
                        </select>
                    </div>
                </div>
            </div>
            {showRelatedTab && <RelatedTab />} {/* Conditionally render RelatedTab */}
        </>
    )
}

export default FilterForShopping
