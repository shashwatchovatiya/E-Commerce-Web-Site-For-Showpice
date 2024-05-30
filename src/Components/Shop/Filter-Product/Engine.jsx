



/* eslint-disable no-unused-vars */
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"


import img35 from "../../../../Image/Changes/Engine Pen Stand/001.jpg";
import img36 from "../../../../Image/Changes/Engine Pen Stand/002.jpg";
import img37 from "../../../../Image/Changes/Engine Pen Stand/003.jpg";
import img38 from "../../../../Image/Changes/Engine Pen Stand/004.jpg";
import img39 from "../../../../Image/Changes/Engine Pen Stand/005.jpg";
import img40 from "../../../../Image/Changes/Engine Pen Stand/006.jpg";
import img41 from "../../../../Image/Changes/Engine Pen Stand/007.jpg";

import Buy from "../../../../Image/Logo/Buynow.png";

import AOS from "aos";
import Pagination from '../Pagination'


const ShopingList12 = [
  {
    id: 35,
    img: img35,
    heading: "Engine Pen Stand-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 36,
    img: img36,
    heading: "Engine Pen Stand-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 37,
    img: img37,
    heading: "Engine Pen Stand-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 38,
    img: img38,
    heading: "Engine Pen Stand-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 39,
    img: img39,
    heading: "Engine Pen Stand-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 40,
    img: img40,
    heading: "Engine Pen Stand-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 41,
    img: img41,
    heading: "Engine Pen Stand-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
];

function Engine() {
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

export default Engine