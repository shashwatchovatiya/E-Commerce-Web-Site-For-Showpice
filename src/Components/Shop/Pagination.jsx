/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    return (
        <div className='conatiner my-36'>
            <div className="flex justify-center gap-5 items-center">
                <div className="box-content">
                    <Link to='/shop'>
                    <button className='px-4  hover:text-white bg-[#B88E2F] text-white   transition-all duration-300 py-2 border rounded-md' >
                        1
                    </button>
                    </Link>
                </div>
                <div className="box-content">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md' to='/notfoundpage'>
                        2
                    </button>
                    </Link>
                </div>
                <div className="box-content">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md'>
                        3
                    </button>
                    </Link>
                </div>
                <div className="box-content md:block hidden">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md'>
                        .
                    </button>
                    </Link>
                </div>
                <div className="box-content md:block hidden">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md'>
                        .
                    </button>
                    </Link>
                </div>
                <div className="box-content">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md'>
                        .
                    </button>
                    </Link>
                </div>
                <div className="box-content">
                    <Link to='/notfoundpage'>

                    <button className='px-4 hover:bg-[#B88E2F] hover:text-white bg-[#F9F1E7]   transition-all duration-300 py-2 border rounded-md'>
                        Next
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Pagination








  