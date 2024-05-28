/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function RelatedTab() {
    return (
        <div className='flex overflow-auto gap-10'>

            <div className='flex md:space-y-0 space-y-2 gap-10  justify-around items-center py-5'>
                <Link to='/shop/t-shirt'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>T-Shirt </button>
                </Link>
                <Link to='/shop/black-Barasingha'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Black Barasingha</button>
                </Link>
                <Link to='/shop/black-penthar'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Black penthar</button>
                </Link>
                <Link to='/shop/dandiya-couple'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>DANDIYA COUPLES</button>
                </Link>
                <Link to='/shop/elephant-set-1'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>ELEPHANT IN ELEPHANT BLACK RED</button>
                </Link>
                <Link to='/shop/elephant-set-2'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Elephant set of 2</button>
                </Link>
               
           
            </div>
            {/* Part 2 */}
            <div className='flex md:space-y-0 space-y-2 gap-10  justify-around items-center sm:py-5'>
                <Link to='/shop/engine-stand'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Engine Pen Stand</button>
                </Link>
                <Link to='/shop/ganesh-blue'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>GANESH BLUE</button>
                </Link>
                <Link to='/shop/ganesh-orange'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>GANESH ORANGE</button>
                </Link>
                <Link to='/shop/ganesh-t-light'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Ganesh T Light</button>
                </Link>
                <Link to='/shop/golden-cycle'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Goden Cycle</button>
                </Link>
                <Link to='/shop/lion'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Lion</button>
                </Link>
                <Link to='/shop/monk'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Monk</button>
                </Link>
            </div>
            {/* Part 3 */}
            <div className='flex md:space-y-0 space-y-2  gap-10  justify-around items-center sm:py-5'>
                <Link to='/shop/pen-green-ganesh'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Pen Green Ganesh</button>
                </Link>
                <Link to='/shop/small-chidiya'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Small Chidiya Pain Black Red</button>
                </Link>
                <Link to='/shop/small-dolls'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Small Dolls</button>
                </Link>
                <Link to='/shop/swan'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Swan rt of 2</button>
                </Link>
                <Link to='/shop/tree-elephant'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Tree elephant</button>
                </Link>
                <Link to='/shop/white-barasingha'>
                    <button className='px-4 py-1 border border-black rounded-lg bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>White Barasingha</button>
                </Link>
                {/* <Link to='>
                    <button className='px-4 py-1 border border-black rounded-full bg-[#FAF3EA] hover:bg-orange-300 transition-all duration-300 hover:text-white'>Monk</button>
                </Link> */}
            </div>
        </div>
    )
}

export default RelatedTab