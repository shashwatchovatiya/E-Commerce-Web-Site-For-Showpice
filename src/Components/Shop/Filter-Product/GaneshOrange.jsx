/* eslint-disable no-unused-vars */

import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img49 from "../../../../Image/Changes/GANESH ORANGE/1.jpg";
import img50 from "../../../../Image/Changes/GANESH ORANGE/2.jpg";
import img51 from "../../../../Image/Changes/GANESH ORANGE/3.jpg";
import img52 from "../../../../Image/Changes/GANESH ORANGE/4.jpg";
import img53 from "../../../../Image/Changes/GANESH ORANGE/5.jpg";
import img54 from "../../../../Image/Changes/GANESH ORANGE/6.jpg";
import img55 from "../../../../Image/Changes/GANESH ORANGE/7.jpg";
import AOS from "aos";
import Buy from "../../../../Image/Logo/Buynow.png";


import Pagination from '../Pagination'

const ShopingList12 = [
  {
    id: 49,
    img: img49,
    heading: "Orange Ganesh-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 50,
    img: img50,
    heading: "Orange Ganesh-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 51,
    img: img51,
    heading: "Orange Ganesh-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 52,
    img: img52,
    heading: "Orange Ganesh-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 53,
    img: img53,
    heading: "Orange Ganesh-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 54,
    img: img54,
    heading: "Orange Ganesh-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },

  {
    id: 55,
    img: img55,
    heading: "Orange Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
];

function GaneshOrange() {
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

export default GaneshOrange