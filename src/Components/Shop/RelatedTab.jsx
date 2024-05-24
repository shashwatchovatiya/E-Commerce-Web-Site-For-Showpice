/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function RelatedTab() {
    return (
        <>

            <div className='sm:flex justify-around items-center py-5 bg-red-200'>
                <Link to='/shop/t-shirt'>
                    <button>T-Shirt </button>
                </Link>
                <Link to='/shop/black-Barasingha'>
                    <button>Black Barasingha</button>
                </Link>
                <Link to='/shop/black-penthar'>
                    <button>Black penthar</button>
                </Link>
                <Link to='/shop/dandiya-couple'>
                    <button>DANDIYA COUPLES</button>
                </Link>
                <Link to='/shop/elephant-set-1'>
                    <button>ELEPHANT IN ELEPHANT BLACK RED</button>
                </Link>
                <Link to='/shop/elephant-set-2'>
                    <button>Elephant set of 2</button>
                </Link>
               
           
            </div>
            {/* Part 2 */}
            <div className='sm:flex justify-around items-center py-5 bg-red-200'>
                <Link to='/shop/engine-stand'>
                    <button>Engine Pen Stand</button>
                </Link>
                <Link to='/shop/ganesh-blue'>
                    <button>GANESH BLUE</button>
                </Link>
                <Link to='/shop/ganesh-orange'>
                    <button>GANESH ORANGE</button>
                </Link>
                <Link to='/shop/ganesh-t-light'>
                    <button>Ganesh T Light</button>
                </Link>
                <Link to='/shop/golden-cycle'>
                    <button>Goden Cycle</button>
                </Link>
                <Link to='/shop/lion'>
                    <button>Lion</button>
                </Link>
                <Link to='/shop/monk'>
                    <button>Monk</button>
                </Link>
            </div>
            {/* Part 3 */}
            <div className='flex justify-around items-center py-5 bg-red-200'>
                <Link to='/shop/pen-green-ganesh'>
                    <button>Pen Green Ganesh</button>
                </Link>
                <Link to='/shop/small-chidiya'>
                    <button>Small Chidiya Pain Black Red</button>
                </Link>
                <Link to='/shop/small-dolls'>
                    <button>Small Dolls</button>
                </Link>
                <Link to='/shop/swan'>
                    <button>Swan rt of 2</button>
                </Link>
                <Link to='/shop/tree-elephant'>
                    <button>Tree elephant</button>
                </Link>
                <Link to='/shop/white-barasingha'>
                    <button>White Barasingha</button>
                </Link>
                {/* <Link to='>
                    <button>Monk</button>
                </Link> */}
            </div>
        </>
    )
}

export default RelatedTab