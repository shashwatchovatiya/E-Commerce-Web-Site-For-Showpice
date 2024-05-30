
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import Heading from "../Heading";
import FilterForShopping from "../FilterForShopping";
import Buy from "../../../../Image/Logo/Buynow.png";

import img70 from "../../../../Image/Changes/Lion/1.jpg";
import img71 from "../../../../Image/Changes/Lion/2.webp";
import img72 from "../../../../Image/Changes/Lion/3.jpg";
import img73 from "../../../../Image/Changes/Lion/4.jpg";
import img74 from "../../../../Image/Changes/Lion/5.webp";
import img75 from "../../../../Image/Changes/Lion/6.jpg";
import img76 from "../../../../Image/Changes/Lion/7.jpg";
import img77 from "../../../../Image/Changes/Lion/8.webp";
import img78 from "../../../../Image/Changes/Lion/9.jpg";

import AOS from "aos";


import Pagination from "../Pagination";

const ShopingList12 = [
  {
    id: 70,
    img: img70,
    heading: "Lion-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 71,
    img: img71,
    heading: "Lion-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 72,
    img: img72,
    heading: "Lion-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 73,
    img: img73,
    heading: "Lion-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 74,
    img: img74,
    heading: "Lion-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 75,
    img: img75,
    heading: "Lion-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 76,
    img: img76,
    heading: "Lion-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 77,
    img: img77,
    heading: "Lion-8",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 78,
    img: img78,
    heading: "Lion-9",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
];

function Lion() {
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

export default Lion;
