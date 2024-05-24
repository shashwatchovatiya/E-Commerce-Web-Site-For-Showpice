

// import React from 'react'
import { useLocation } from 'react-router-dom';
import bgImage1 from '../../../Image/Shop/HeadingPage/HeadingBackGround.png'
import { FaChevronRight } from "react-icons/fa";

function Heading() {
    const location = useLocation(); // Corrected variable name
    const pathname = location.pathname;

    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

    const newPath = pathname.split('/').filter(segment => segment).map(segment => capitalizeFirstLetter(segment)).join(' / ');


    return (
        <div className="w-full h-[35vh] text-center items-center flex justify-center flex-col"  style={{ backgroundImage: `url(${bgImage1})`,}}>
            <span className='md:text-4xl text-2xl font-semibold'>
                {newPath}
            </span>
            <span className='flex items-center text-xl'>
                Home <FaChevronRight /> {newPath}
            </span>
        </div>
    )
}

export default Heading;