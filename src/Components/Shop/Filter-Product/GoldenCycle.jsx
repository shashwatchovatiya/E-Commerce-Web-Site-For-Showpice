

/* eslint-disable no-unused-vars */

import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img63 from "../../../../Image/Changes/Goden Cycle/01.jpg";
import img64 from "../../../../Image/Changes/Goden Cycle/02.jpg";
import img65 from "../../../../Image/Changes/Goden Cycle/3.jpg";
import img66 from "../../../../Image/Changes/Goden Cycle/04.jpg";
import img67 from "../../../../Image/Changes/Goden Cycle/05.jpg";
import img68 from "../../../../Image/Changes/Goden Cycle/06.jpg";
import img69 from "../../../../Image/Changes/Goden Cycle/07.jpg";
import AOS from "aos";
import Buy from "../../../../Image/Logo/Buynow.png";

import Pagination from '../Pagination'

const ShopingList12 = [
  {
    id: 63,
    img: img63,
    heading: "Golden Cycle -1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 64,
    img: img64,
    heading: "Golden Cycle -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 65,
    img: img65,
    heading: "Golden Cycle 3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 66,
    img: img66,
    heading: "Golden Cycle -4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 67,
    img: img67,
    heading: "Golden Cycle -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 68,
    img: img68,
    heading: "Golden Cycle -6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 69,
    img: img69,
    heading: "Golden Cycle -7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
];

function GoldenCycle() {
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

export default GoldenCycle