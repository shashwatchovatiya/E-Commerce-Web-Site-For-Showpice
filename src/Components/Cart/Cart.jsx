// import React from 'react'
import { MdDelete } from "react-icons/md";
import img1 from '../../../Image/Cart/CartHover1.png'
import Heading from "../Shop/Heading";



function Cart() {
    return (
        <>

            {/* Heading Componnets */}
            <Heading />

            <div className="flex md:text-base text-sm mt-10 conatiner md:flex-row flex-col gap-5 text-center    mx-auto ">
                {/* Left side */}
                <table className="md:w-3/4 w-full">
                    <thead>
                        <tr className="bg-[#F9F1E7] mt-5">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td><img src={img1} alt="" /></td>
                            <td>Asgaard sofa</td>
                            <td>Rs. 250,000.00</td>
                            <td><button className='px-2'>1</button></td>
                            <td>Rs. 250,000.00</td>
                            <td><MdDelete className="text-[#B88E2F]" /></td>
                        </tr>
                    </tbody>
                </table>



                {/* Right Side */}
                <div className="md:w-1/4 bg-[#F9F1E7] box-border py-3 md:mt-0 mt-10">
                    <h1 className="font-bold text-2xl">Cart Totals</h1>
                    <div className="flex justify-around mt-8">
                        <p className="text-sm">Subtotal</p>
                        <p className="text-sm">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-around mt-8">
                        <p className="text-sm">Total</p>
                        <p className="text-base text-[#B88E2F]">Rs. 250,000.00</p>
                    </div>
                    <div className="">
                        <button className="px-6 py-1 mt-5 mb-10 border-black border">Check Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart