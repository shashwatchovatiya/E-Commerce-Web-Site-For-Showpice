

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import Heading from "../Heading";
import FilterForShopping from "../FilterForShopping";
import AOS from "aos";

import img79 from "../../../../Image/Changes/Monk/51LVxT+DROL._AC_SL1081_.jpg";
import img80 from "../../../../Image/Changes/Monk/610DHm3BLdL._AC_SL1081_.jpg";
import Buy from "../../../../Image/Logo/Buynow.png";


import Pagination from "../Pagination";

const ShopingList12 = [
  {
    id: 79,
    img: img79,
    heading: "Monk Showpice - 1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },

  {
    id: 80,
    img: img80,
    heading: "Monk Showpice - 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },
];

function Monk() {
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

export default Monk;
