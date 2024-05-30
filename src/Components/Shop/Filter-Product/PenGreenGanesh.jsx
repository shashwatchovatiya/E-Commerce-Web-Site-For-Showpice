/* eslint-disable no-unused-vars */

import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img81 from "../../../../Image/Changes/pen Green Ganesh/01.jpg";
import img82 from "../../../../Image/Changes/pen Green Ganesh/02.jpg";
import img83 from "../../../../Image/Changes/pen Green Ganesh/03.jpg";
import img84 from "../../../../Image/Changes/pen Green Ganesh/04.jpg";
import img85 from "../../../../Image/Changes/pen Green Ganesh/05.jpg";
import img86 from "../../../../Image/Changes/pen Green Ganesh/06.jpg";
import img87 from "../../../../Image/Changes/pen Green Ganesh/07.jpg";
import Buy from "../../../../Image/Logo/Buynow.png";

import AOS from "aos";


import Pagination from '../Pagination'

const ShopingList12 = [
  {
    id: 81,
    img: img81,
    heading: "Pan Ganesh-1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 82,
    img: img82,
    heading: "Pan Ganesh-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 83,
    img: img83,
    heading: "Pan Ganesh-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 84,
    img: img84,
    heading: "Pan Ganesh-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 85,
    img: img85,
    heading: "Pan Ganesh-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 86,
    img: img86,
    heading: "Pan Ganesh-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 87,
    img: img87,
    heading: "Pan Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
];

function PenGreenGanesh() {
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

export default PenGreenGanesh