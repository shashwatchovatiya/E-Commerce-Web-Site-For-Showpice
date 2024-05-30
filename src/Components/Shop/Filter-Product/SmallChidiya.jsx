/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import Heading from "../Heading";
import FilterForShopping from "../FilterForShopping";
import img88 from "../../../../Image/Changes/Small Chidiya Pain Black Red/01.jpg";
import img89 from "../../../../Image/Changes/Small Chidiya Pain Black Red/02.jpg";
import img90 from "../../../../Image/Changes/Small Chidiya Pain Black Red/03.jpg";
import img91 from "../../../../Image/Changes/Small Chidiya Pain Black Red/04.jpg";
import img92 from "../../../../Image/Changes/Small Chidiya Pain Black Red/05.jpg";
import img93 from "../../../../Image/Changes/Small Chidiya Pain Black Red/06.jpg";
import Buy from "../../../../Image/Logo/Buynow.png";

import AOS from "aos";


import Pagination from "../Pagination";

const ShopingList12 = [
  {
    id: 88,
    img: img88,
    heading: "Sparrow -1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 89,
    img: img89,
    heading: "Sparrow -2",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 90,
    img: img90,
    heading: "Sparrow -3",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 91,
    img: img91,
    heading: "Sparrow -4",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 92,
    img: img92,
    heading: "Dear Showpice",
    title: "Sparrow -5",
    price: 5000.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 93,
    img: img93,
    heading: "Sparrow -6",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
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
