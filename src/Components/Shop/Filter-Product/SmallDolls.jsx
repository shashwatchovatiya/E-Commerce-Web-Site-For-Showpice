// // import React from 'react'

// function SmallDolls() {
//   return (
//     <div>SmallDolls</div>
//   )
// }

// export default SmallDolls

/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import Heading from "../Heading";
import FilterForShopping from "../FilterForShopping";

import img94 from "../../../../Image/Changes/Small Dolls/01.jpg";
import img95 from "../../../../Image/Changes/Small Dolls/02.jpg";
import img96 from "../../../../Image/Changes/Small Dolls/03.jpg";
import img97 from "../../../../Image/Changes/Small Dolls/04.jpg";
import img98 from "../../../../Image/Changes/Small Dolls/05.jpg";
import img99 from "../../../../Image/Changes/Small Dolls/06.jpg";

import AOS from "aos";

import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import Pagination from "../Pagination";
import Buy from "../../../../Image/Logo/Buynow.png";

const ShopingList12 = [
  {
    id: 94,
    img: img94,
    heading: "Small Dolls - 1",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 95,
    img: img95,
    heading: "Small Dolls - 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 96,
    img: img96,
    heading: "Small Dolls - 3",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 97,
    img: img97,
    heading: "Small Dolls - 4",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 98,
    img: img98,
    heading: "Small Dolls - 5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 99,
    img: img99,
    heading: "Small Dolls - 6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  //
];

function SmallChidiya() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Product added to cart:", product);
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

export default SmallChidiya;
