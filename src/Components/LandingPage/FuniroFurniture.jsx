/* eslint-disable no-unused-vars */
// import React from 'react'

// import img1 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-36.png'
// import img2 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-37.png'
// import img3 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-38.png'
// import img4 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-39.png'
// import img5 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-40.png'
// import img6 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-41.png'
// import img7 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-43.png'
// import img8 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-44.png'
// import img9 from '../../../Image/Landing-Page/FutherFurniture/Rectangle-45.png'

// function FuniroFurniture() {
//     return (

//         <>
//         <div className='md:mt-20 mt-10 text-center'>
//            <span> Shar your setup with</span>
//            <h1 className='text-xl font-bold'>#FuniroFurniture</h1>
//         </div>
//             <div className=" md:flex justify-center gap-5 w-full md:h-screen   bg-cover">

//                 {/* 1'st */}
//                 <div className=" md:h-[300px] h-auto md:w-auto w-full">
//                     <div className="md:flex gap-5 w-full h-3/4">
//                         <span className='img1 flex justify-center '>
//                             <img src={img1} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer md:w-full hidden md:block h-[225px] md:h-[100%] bg-cover' />
//                         </span>
//                         <span className='img3  flex items-end'>
//                             <img src={img3} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer md:w-[280px] w-full h-[170px] ' />
//                         </span>

//                     </div>
//                     <div className="md:flex gap-5 mt-5 w-full h-3/4">
//                         <span className='img2 '>
//                             <img src={img2} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full h-[200px] bg-contain' />
//                         </span>
//                         <span className='img4'>
//                             <img src={img4} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full md:h-[150px] bg-contain' />
//                         </span>
//                     </div>
//                 </div>
//                 {/* 2 */}
//                 <div className="flex justify-center items-center  ">
//                     <span className='img5  flex justify-center items-center '>
//                         <img src={img5} alt="funiroFunriture" onClick={()=>{
//                             alert("This function is not ready for bakend Side")
//                         }} className='cursor-pointer w-full h-[200px] bg-contain' />
//                     </span>
//                 </div>

//                 {/* 3 Content */}
//                 <div className="">
//                 <div className=" gap-7 w-auto md:h-[300px] h-auto md:w-full">
//                     <div className="md:flex gap-5 w-full h-3/4">
//                         <span className='img1 flex items-end'>
//                             <img src={img7} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full h-[180px]' />
//                         </span>
//                         <span className='img3'>
//                             <img src={img9} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full h-[220px] ' />
//                         </span>

//                     </div>
//                     <div className="md:flex gap-5 mt-5 w-full h-3/4">
//                         <span className='img6 '>
//                             <img src={img6} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full h-[200px]' />
//                         </span>
//                         <span className='img7'>
//                             <img src={img8} alt="funiroFunriture" onClick={()=>{
//                                 alert("This function is not ready for bakend Side")
//                             }} className='cursor-pointer w-full md:w-[200px] h-[150px]' />
//                         </span>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default FuniroFurniture

import React from "react";

import img1 from "../../../Image/T-Shirt/Black.jpg";
import img2 from "../../../Image/T-Shirt/Kathai.jpg";
import img3 from "../../../Image/T-Shirt/NaviBlue.jpg";
import img4 from "../../../Image/T-Shirt/OffGreen.jpg";
import img5 from "../../../Image/T-Shirt/Orange.jpg";
import img6 from "../../../Image/T-Shirt/S-color.jpg";
import img7 from "../../../Image/T-Shirt/White.jpg";
import img8 from "../../../Image/T-Shirt/Yellow.jpg";

import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const ImageListForOurProduct = [
  {
    id: 1,
    img: img1,
    heading: "Black T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 2,
    img: img2,
    heading: "Brown T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 3,
    img: img3,
    heading: "NaviBlue T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!   ",
    price: 70000.0,
    orignialPrice: 13500,
  },
  {
    id: 4,
    img: img4,
    heading: "NaviBlue T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!   ",
    price: 5000.0,
    orignialPrice: 3500,
  },
  {
    id: 5,
    img: img5,
    heading: "Orange T-Shrit",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 6,
    img: img6,
    heading: "Gray T-Shrit",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 25000.0,
    orignialPrice: 35000,
  },
  {
    id: 7,
    img: img7,
    heading: "White T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping! ",
    price: 35000.0,
    orignialPrice: 40000,
  },
  {
    id: 8,
    img: img8,
    heading: "Yellow T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping! ",
    price: 5000.0,
    orignialPrice: 6300,
  },
];

function FuniroFurniture() {
  return (
    <div>
      <div className="text-center py-5 mt-28">
        <span className="text-xl md:text-3xl font-bold">Our Product </span>
      </div>
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ImageListForOurProduct.map((data) => (
            <div
              className="group relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out  overflow-hidden"
              key={data.id}
            >
              <img
                src={data.img}
                alt={data.heading}
                className="w-full h-64 object-fill transform transition-transform duration-500 group-hover:scale-110 "
                data-aos="fade-up"
                // data-aos-delay={data.aosDelay}
              />
              <div className="flex flex-col justify-between bg-gray-200 space-y-2 p-4 w-full transition-all duration-500 ease-in-out">
                <h2
                  className="text-lg font-bold"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                >
                  {data.heading}
                </h2>

                <div
                  className="flex justify-between items-center"
                  data-aos="fade-up"
                  //   data-aos-delay={data.aosDelay}
                >
                  <p className="text-sm font-bold">{data.price} RS</p>
                  <p className="text-sm font-bold line-through">
                    {data.orignialPrice} RS
                  </p>
                </div>
                <Link
                  to={data.link}
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <button className="bg-white w-[90%] text-[#B88E2F] py-2 px-6 rounded">
                    Buy on Filpkart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Link to="/shop">
          <button
            className="mt-4 px-4 py-2 rounded border border-[#B88E2F] h hover:bg-orange-500 hover:text-white transition duration-300"
            href=""
          >
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FuniroFurniture;
