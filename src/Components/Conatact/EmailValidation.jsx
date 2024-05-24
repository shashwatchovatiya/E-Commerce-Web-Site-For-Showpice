// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { FaLocationDot } from "react-icons/fa6";
// import { MdWatchLater } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";

// function EmailValidation() {
//     return (
//         <div className='conatiner'>
//             <div className="text-center md:w-[600px] mx-auto md:mt-32 mt-24" >
//                 <h1 className='text-xl md:text-2xl font-bold tr'>Get In Touch With Us</h1>
//                 <span className='text-gray-500 text-sm'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
//             </div>

//             <div className="conatiner md:flex justify-center  mt-20 mx-auto">
//                 {/* Left Side */}
//                 <div className="flex  flex-col   space-y-5 ">
//                     <div className="flex gap-5 ">
//                         <FaLocationDot />
//                         <div className="flex flex-col">
//                             <span className='block font-semibold'>Address</span>
//                             <span className='text-xs pt-2'>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</span>
//                         </div>
//                     </div>
//                     <div className="flex gap-5">
//                         <FaPhoneAlt />
//                         <div className="flex flex-col">
//                             <span className='block font-semibold'>Phone</span>
//                             <span className='text-xs pt-2'>Mobile: +(84) 546-6789
//                                 ,<br /> Hotline: +(84) 456-6789<br /> </span>
//                         </div>
//                     </div>
//                     <div className="flex gap-5">
//                         <MdWatchLater />
//                         <div className="flex flex-col">
//                             <span className='block font-semibold'>Working Time</span>
//                             <span className='text-xs pt-2'>Monday-Friday: 9:00 - 22:00 <br />
//                                 Saturday-Sunday: 9:00 - 21:00</span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Right Side */}
//                 <div className="w-2/4">
//                     <form action="" className='space-y-5 flex flex-col justify-center'>
//                         <div className="">
//                             <label htmlFor="">Your Name</label><br />
//                             <input type="text" name="" id="" placeholder='Enter Your Name' className='px-5 py-2 rounded-md w-1/2 border mt-2' /><br />

//                         </div>
//                         <div className="">
//                             <label htmlFor="">Email Address</label><br />
//                             <input type="email" name="" id="" placeholder='Enter Your Email' className='px-5 py-2 rounded-md w-1/2 border mt-2' />
//                         </div>
//                         <div className="">
//                             <label htmlFor="">Subject</label><br />
//                             <input type="text" name="" id="" placeholder='This is an optioanl' className='px-5 py-2 rounded-md w-1/2 border mt-2' />
//                         </div>
//                         <div className="">
//                             <label htmlFor="">Message</label><br />
//                            <textarea name="" id="" cols="30" rows="4" className='border rounded-md px-4 py-2 'placeholder='Hii,Do you want to ask about me'></textarea>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EmailValidation

/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function EmailValidation() {
    return (
        <div className='conatiner mx-auto'>
            <div className="text-center md:w-[600px] mx-auto md:mt-32 mt-24" >
                <h1 className='text-xl md:text-2xl font-bold'>Get In Touch With Us</h1>
                <span className='text-gray-500 text-sm'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
            </div>

            <div className="conatiner md:flex justify-between mt-20 mx-auto md:w-3/4">
                {/* Left Side */}
                <div className="flex flex-col  space-y-5 md:w-1/2">
                    <div className="flex gap-5 items-start">
                        <FaLocationDot size={24} />
                        <div className="flex flex-col">
                            <span className='block font-semibold'>Address</span>
                            <span className='text-xs pt-2'>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</span>
                        </div>
                    </div>
                    <div className="flex gap-5 items-start">
                        <FaPhoneAlt size={24} />
                        <div className="flex flex-col">
                            <span className='block font-semibold'>Phone</span>
                            <span className='text-xs pt-2'>Mobile: +(84) 546-6789,<br /> Hotline: +(84) 456-6789<br /></span>
                        </div>
                    </div>
                    <div className="flex gap-5 items-start">
                        <MdWatchLater size={24} />
                        <div className="flex flex-col">
                            <span className='block font-semibold'>Working Time</span>
                            <span className='text-xs pt-2'>Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00</span>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <form action="" className='space-y-5 flex flex-col'>
                        <div className="">
                            <label htmlFor="name">Your Name</label><br />
                            <input type="text" id="name" placeholder='Enter Your Name' className='px-5 py-2 rounded-md w-full border mt-2' /><br />
                        </div>
                        <div className="">
                            <label htmlFor="email">Email Address</label><br />
                            <input type="email" id="email" placeholder='Enter Your Email' className='px-5 py-2 rounded-md w-full border mt-2' />
                        </div>
                        <div className="">
                            <label htmlFor="subject">Subject</label><br />
                            <input type="text" id="subject" placeholder='This is optional' className='px-5 py-2 rounded-md w-full border mt-2' />
                        </div>
                        <div className="">
                            <label htmlFor="message">Message</label><br />
                            <textarea id="message" cols="30" rows="4" className='border rounded-md px-4 py-2 w-full mt-2' placeholder='Hi, do you want to ask about me'></textarea>
                        </div>
                        <div className="">
                            <button className='bg-[#B88E2F] text-white px-10 py-2 rounded-sm mb-24'onClick={()=>{
                                alert("Your Data was sent to server")
                            }} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailValidation
