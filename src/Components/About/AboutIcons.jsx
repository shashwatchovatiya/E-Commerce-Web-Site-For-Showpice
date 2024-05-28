/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaProductHunt } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import AOS from 'aos';

function AboutIcons() {

    useEffect(() => {
        AOS.init({
            duration: 500, // You can set a default duration for the animations
        });
    }, []);
    return (
        <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 my-8 py-16 bg-red-50">
                <div className="flex flex-col justify-center items-center space-y-6 md:border-r border-orange-400" 
                   data-aos="zoom-in"
                   data-aos-duration="1500"
                   data-aos-once="true"
                >
                    <span className='text-8xl text-orange-500'
                        
                    >
                        <FaProductHunt />
                    </span>
                    <span className='text-3xl hover:text-orange-400 transition-all duration-300 font-bold'
                       
                    >
                        Choose product
                    </span>
                    <p className='text-zinc-600 px-8 text-center'
                     
                    >If you are going to use a passage of you need to be sure there isn't anything emc barrassing hidden in the middle</p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-6 md:border-r border-orange-400"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                >
                    <span className='text-6xl bg-orange-500 text-white p-5 rounded-full'
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-once="true"
                    >
                        <FaHandHoldingUsd />
                    </span>
                    <span className='text-3xl hover:text-orange-400 transition-all duration-300 font-bold'

                    >
                        Make Your Payment
                    </span>
                    <p className='text-zinc-600 px-8 text-center'>Experience hassle-free online shopping with our service! Simply choose the product you want</p>
                </div>

                <div className="flex flex-col justify-center items-center space-y-6"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-once="true"
                >
                    <span className='text-6xl bg-orange-500 text-white p-5 rounded-full'>
                        <TbTruckDelivery />
                    </span>
                    <span className='text-3xl hover:text-orange-400 transition-all duration-300 font-bold'>
                        Fast Delivery
                    </span>
                    <p className='text-zinc-600 px-8 text-center'>Experience hassle-free online shopping with our service! enjoy fast delivery right to your doorstep.</p>
                </div>
            </div>
        </>
    )
}

export default AboutIcons