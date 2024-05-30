/* eslint-disable no-unused-vars */

import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img56 from "../../../../Image/Changes/Ganesh T Light/001.jpg";
import img57 from "../../../../Image/Changes/Ganesh T Light/002.jpg";
import img58 from "../../../../Image/Changes/Ganesh T Light/003.jpg";
import img59 from "../../../../Image/Changes/Ganesh T Light/004.jpg";
import img60 from "../../../../Image/Changes/Ganesh T Light/005.jpg";
import img61 from "../../../../Image/Changes/Ganesh T Light/006.jpg";
import img62 from "../../../../Image/Changes/Ganesh T Light/007.jpg";
import AOS from "aos";
import Buy from "../../../../Image/Logo/Buynow.png";



import Pagination from '../Pagination'

const ShopingList12 = [
  {
    id: 56,
    img: img56,
    heading: "Ganesh T-light -1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 57,
    img: img57,
    heading: "Ganesh T-light -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 58,
    img: img58,
    heading: "Ganesh T-light -3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 59,
    img: img59,
    heading: "Ganesh T-light -4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 60,
    img: img60,
    heading: "Ganesh T-light -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 61,
    img: img61,
    heading: "Ganesh T-light -6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 62,
    img: img62,
    heading: "Ganesh T-light -7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
];

function GaneshTLight() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

useEffect(() => {
  AOS.init({
    duration: 500, // You can set a default duration for the animations
  });
}, []);


  return (
    <>
      {/* Heading Section */}
      <Heading />

      {/* Filter path */}
      <FilterForShopping />
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ShopingList12.map((data) => (
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

              <div className="flex flex-col space-y-3 justify-between bg-gray-200 p-4 w-full transition-all duration-500 ease-in-out">
                {/* <img src={logo} alt="" className="w-24" /> */}
                <h2 className="text-zinc-600">FameAdda</h2>
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
                  <p className="text-sm font-bold line-through text-red-600">
                    {data.orignialPrice} RS
                  </p>
                </div>
                <Link
                  to={data.link}
                  target="_blank"
                  className="w-full  justify-center bg-white text-lg text-[#B88E2F] py-1 px-6 rounded flex items-center gap-2"
                >
                  <button className=" p-0 m-0">Buy on</button>
                  <span className="flex justify-center items-center ">
                    <img src={Buy} alt="" className="w-20 mt-2" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default GaneshTLight