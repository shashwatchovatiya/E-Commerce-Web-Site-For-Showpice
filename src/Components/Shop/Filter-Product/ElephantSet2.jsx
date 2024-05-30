
// import React from 'react'

// function ElephantSet2() {
//   return (
//     <div>ElephantSet2</div>
//   )
// }

// export default ElephantSet2
// /* eslint-disable no-unused-vars */
// import React from 'react'

// function ElephantSet1() {
//   return (
//     <div>ElephantSet1</div>
//   )
// }

// export default ElephantSet1

// import React from 'react'

// function BlackPenthar() {
//   return (
//     <div>BlackPenthar</div>
//   )
// }

// export default BlackPenthar

/* eslint-disable no-unused-vars */
import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import Buy from "../../../../Image/Logo/Buynow.png";

import img28 from "../../../../Image/Changes/elephant set of 2/1_1_11zon51509.jpg-magic-wymw.jpg";
import img29 from "../../../../Image/Changes/elephant set of 2/H4add44c2abbd47619d63d4607eac4de49_2_11zon79376.jpg-magic-jckc.jpg";
import img30 from "../../../../Image/Changes/elephant set of 2/H91e2ee333c73441f9ae6e9f42d890b74B_3_11zon58062.jpg-magic-ytxa.jpg";
import img31 from "../../../../Image/Changes/elephant set of 2/H82734bc4bf9849f6b34bf2649d3bddcfU_4_11zon43956.jpg-magic-eqgy.jpg";
import img32 from "../../../../Image/Changes/elephant set of 2/Hd7e357bd3aff4d40afb4f9d6891d40c5r_6_11zon46954.jpg-magic-hhez.jpg";
import img33 from "../../../../Image/Changes/elephant set of 2/Hc3b266bada05450290a76502012ce2e05_5_11zon29741.jpg-magic-qwof.jpg";
import img34 from "../../../../Image/Changes/elephant set of 2/Hfd7bfb07ed7140c6b8f55830337ffb21S_7_11zon84383.jpg-magic-jbte.jpg";

import AOS from "aos";
import Pagination from '../Pagination'



const ShopingList12 = [
  {
    id: 28,
    img: img28,
    heading: "Elephant Set - 2 product 1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 29,
    img: img29,
    heading: "Elephant Set - 2 product 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 30,
    img: img30,
    heading: "Elephant Set - 2 product 3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 31,
    img: img31,
    heading: "Elephant Set - 2 product 4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 32,
    img: img32,
    heading: "Elephant Set - 2 product 5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 33,
    img: img33,
    heading: "Elephant Set - 2 product 6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 34,
    img: img34,
    heading: "Elephant Set - 2 product 7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
];

function ElephantSet2() {
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

export default ElephantSet2